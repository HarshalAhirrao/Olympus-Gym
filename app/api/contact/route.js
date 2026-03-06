import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ── Transporter (created once, reused across requests) ──────────────
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// ── Simple in-memory rate limiter ───────────────────────────────────
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const rateLimitMap = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { windowStart: now, count: 1 });
        return false;
    }

    entry.count += 1;
    return entry.count > MAX_REQUESTS_PER_WINDOW;
}

// ── Validation helpers ──────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(req) {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
        return NextResponse.json(
            { success: false, error: "Too many requests. Please try again later." },
            { status: 429 },
        );
    }

    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
        return NextResponse.json(
            { success: false, error: "All fields are required." },
            { status: 400 },
        );
    }

    if (!EMAIL_RE.test(email)) {
        return NextResponse.json(
            { success: false, error: "Invalid email address." },
            { status: 400 },
        );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
            { success: false, error: `Message must be under ${MAX_MESSAGE_LENGTH} characters.` },
            { status: 400 },
        );
    }

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Mail error:", err);
        return NextResponse.json(
            { success: false, error: "Failed to send email." },
            { status: 500 },
        );
    }
}
