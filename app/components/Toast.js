"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { toast } from "react-hot-toast";

export default function Toast({ show, onClose }) {
    if (!show) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="relative max-w-md w-full rounded-[2.5rem] p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)]">
                    
                    <div className="bg-[#0a0a0a] rounded-[2.5rem] p-10 md:p-12 overflow-hidden relative">
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 blur-[60px] rounded-full pointer-events-none" />
                        
                        {/* Content */}
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            
                            <h2 className="text-3xl font-extrabold mb-5 tracking-tight bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent">
                                Important Notice
                            </h2>
                            
                            <div className="text-[15px] text-gray-400 space-y-5 mb-10 leading-relaxed font-medium">
                                <p>
                                    <strong className="text-white font-bold">This is a portfolio project</strong> created to showcase high-level design and development expertise.
                                </p>
                                <p>
                                    It is not a real business — please <span className="text-red-400 font-bold underline decoration-red-500/30 underline-offset-4">do not share sensitive data</span> or attempt payments.
                                </p>
                                <p>
                                    Need assistance?{" "}
                                    <Link href="/contact" onClick={onClose} className="text-white hover:text-red-500 font-bold underline transition-all duration-300 decoration-red-500/30 underline-offset-4">
                                        Let&apos;s talk
                                    </Link>
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        toast.success("Thanks for understanding! 💪", {
                                            style: {
                                                background: '#111',
                                                color: '#fff',
                                                borderRadius: '16px',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                fontSize: '14px',
                                                fontWeight: '600'
                                            }
                                        });
                                        onClose();
                                    }}
                                    className="w-full py-4 rounded-2xl font-bold text-sm bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-orange-500 text-white shadow-xl shadow-red-600/20 transition-all duration-500">
                                    I Understand
                                </motion.button>
                                <button
                                    onClick={onClose}
                                    className="w-full py-2 text-sm font-semibold text-gray-500 hover:text-white transition-colors duration-300">
                                    Dismiss
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
