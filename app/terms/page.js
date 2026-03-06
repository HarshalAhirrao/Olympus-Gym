
export default function TermsPage() {
    return (
        <main className="bg-black text-white px-6 py-20 min-h-screen relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 mb-5">
                        📋 Legal
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mb-3">Terms & Conditions</h1>
                </div>

                <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/10 to-transparent">
                    <div className="bg-[#0f0f0f] rounded-2xl p-8 space-y-4">
                        <p className="text-gray-400 text-sm leading-7">
                            By using this site, you acknowledge that it is a personal portfolio project. No actual purchases, training, or memberships are provided.
                        </p>
                        <p className="text-gray-500 text-xs italic">Do not enter sensitive or payment information.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
