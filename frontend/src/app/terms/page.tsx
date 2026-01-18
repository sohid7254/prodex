"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
                    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-8">
                        <FileText className="text-indigo-600" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Terms of Service</h1>
                    <p className="text-slate-500 mb-10 text-lg italic">Effective Date: January 18, 2026</p>

                    <div className="space-y-10 prose prose-slate dark:prose-invert max-w-none">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Account Responsibility</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Intellectual Property</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">All content on our platform, including text, graphics, logos, and images, is the property of Prodex Inc. and is protected by intellectual property laws.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Limitation of Liability</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Our services are provided on an "as is" basis. We shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our services.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
