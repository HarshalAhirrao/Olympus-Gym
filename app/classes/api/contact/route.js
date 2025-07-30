import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ success: false, error: "All fields are required." }), { status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail", // or your provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        console.log("EMAIL_USER", process.env.EMAIL_USER);
        console.log("EMAIL_PASS", process.env.EMAIL_PASS ? "defined" : "undefined");

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER, // your receiving email
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error("Mail error:", err);
        return new Response(JSON.stringify({ success: false, error: "Failed to send email." }), { status: 500 });
    }
}
