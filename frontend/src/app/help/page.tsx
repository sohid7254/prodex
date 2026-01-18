"use client";

import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

export default function HelpCenterPage() {
    const faqs = [
        { q: "How do I track my order?", a: "Once your order is shipped, you will receive an email with a tracking number and a link to the carrier's website." },
        { q: "What is your return policy?", a: "We offer a 30-day return policy for most items. The product must be in its original packaging and condition." },
        { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location." },
        { q: "How can I contact customer support?", a: "You can reach us through email, phone, or our 24/7 live chat service." },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Help Center</h1>
                    <p className="text-slate-500 text-lg">Everything you need to know about our products and services.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: <Mail className="text-indigo-600" />, title: "Email Us", detail: "support@prodex.com" },
                        { icon: <Phone className="text-indigo-600" />, title: "Call Us", detail: "+1 (555) 000-0000" },
                        { icon: <MessageCircle className="text-indigo-600" />, title: "Live Chat", detail: "Available 24/7" },
                    ].map((item, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                            <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                            <p className="text-slate-500 overflow-hidden text-ellipsis">{item.detail}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-100 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
                        <HelpCircle className="text-indigo-600" /> Frequently Asked Questions
                    </h2>
                    <div className="space-y-8">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{faq.q}</h3>
                                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
