"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";


export default function Toast({ show, onClose }) {
    if (!show) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed top-6 right-6 max-w-md w-[90%] bg-[#121212] border border-zinc-700 text-white px-6 py-5 rounded-2xl shadow-2xl z-[100]">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3">
                    <p className="text-lg font-semibold text-yellow-400 flex items-center gap-2">
                        <span>⚠️</span> Important Notice
                    </p>
                </div>

                {/* Body */}
                <div className="text-sm text-gray-300 space-y-3 mb-4">
                    <p>
                        <strong>This site is a personal project to showcase my work.</strong>
                    </p>
                    <p>
                        It&apos;s not a real gym — please <span className="text-red-400 font-medium">don&apos;t make actual payments</span>.
                    </p>
                    <p>
                        If you did by mistake,{" "}
                        <Link href="/contact" className="underline text-blue-400 hover:text-blue-300 transition">
                            contact me
                        </Link>{" "}
                        and I&apos;ll help you.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 text-sm bg-zinc-800 border border-zinc-600 text-gray-300 hover:bg-zinc-700 rounded-md transition">
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            toast("Not quite ready to lift your wallet! Payments coming soon 💪");
                            onClose(); // close the toast
                        }}
                        className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md transition shadow-sm">
                        Proceed Anyway
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
