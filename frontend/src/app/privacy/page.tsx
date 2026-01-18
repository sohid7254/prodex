"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
                    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mb-8">
                        <Shield className="text-indigo-600" size={32} />
                    </div>
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Privacy Policy</h1>
                    <p className="text-slate-500 mb-10 text-lg italic">Last updated: January 18, 2026</p>

                    <div className="space-y-10 prose prose-slate dark:prose-invert max-w-none">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Data Collection</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                                We collect various types of information, including information you provide directly to us and information we collect automatically through your use of our services. This may include your name, email address, shipping address, and payment information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Use of Data</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Your data is used to provide and enhance our services, process your orders, communicate with you, and personalize your experience. We do not sell your personal information to third parties.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Security</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction. This includes encryption and secure socket layer (SSL) technology.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Cookies</h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">We use cookies and similar technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
