"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Truck, RotateCcw, Send, Play, PlusCircle } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Home() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            {/* 1. Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-slate-950 dark:via-zinc-950 dark:to-indigo-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="z-10">
                        <motion.span variants={fadeIn} className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-100 rounded-full dark:bg-indigo-900/30 dark:text-indigo-400">
                            Transform Your Space
                        </motion.span>
                        <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                            Exclusive Quality <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Premium Trends</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                            Discover a curated collection of world-class products designed for your lifestyle. High-end quality meets exceptional design.
                        </motion.p>
                        <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                            <Link href="/items" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-xl hover:shadow-indigo-500/20 flex items-center gap-2 group">
                                Shop Collection
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-bold transition-all border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center gap-2">
                                <Play size={18} fill="currentColor" />
                                See Stories
                            </button>
                        </motion.div>
                        <motion.div variants={fadeIn} className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900 dark:text-white">10k+ Happy Customers</p>
                                <div className="flex text-amber-400">
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                    <Star size={14} fill="currentColor" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative h-[500px] lg:h-[600px] flex justify-center items-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 group">
                            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" alt="Premium Product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                                <h3 className="text-xl font-bold">Luxe Horizon Edition</h3>
                                <p className="text-sm text-slate-200">Limited quantity available now.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Features Section */}
            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Truck className="text-indigo-600" />, title: "Free Shipping", desc: "On all orders over $100" },
                            { icon: <ShieldCheck className="text-indigo-600" />, title: "Secure Payment", desc: "100% secure payment methods" },
                            { icon: <RotateCcw className="text-indigo-600" />, title: "Easy Returns", desc: "30-day money back guarantee" },
                            { icon: <Star className="text-indigo-600" />, title: "Premium Quality", desc: "Crafted by experts" },
                        ].map((feature, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-indigo-50/50 dark:bg-slate-900/50 border border-indigo-100/50 dark:border-slate-800 transition-all text-center">
                                <div className="flex justify-center mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Featured Categories */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Curated Categories</h2>
                            <p className="text-slate-500 max-w-lg">Explore our diverse range of premium products tailored for every need.</p>
                        </div>
                        <Link href="/items" className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            View All <ArrowRight size={20} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Electronics", img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=500&auto=format&fit=crop", count: "120+ Products" },
                            { name: "Lifestyle", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop", count: "85+ Products" },
                            { name: "Accessories", img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=500&auto=format&fit=crop", count: "210+ Products" },
                        ].map((cat, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.02 }} className="relative h-[400px] rounded-3xl overflow-hidden group cursor-pointer">
                                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-8 left-8">
                                    <p className="text-indigo-400 font-bold text-sm mb-1">{cat.count}</p>
                                    <h3 className="text-2xl font-bold text-white mb-4">{cat.name}</h3>
                                    <button className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">Explore</button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. About Us/Story Section */}
            <section className="py-24 bg-white dark:bg-zinc-950 flex overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=800&auto=format&fit=crop" alt="Our Story" />
                        </div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl"></div>
                        <div className="absolute -bottom-10 -right-10 px-8 py-6 bg-white dark:bg-slate-900 rounded-2xl shadow-xl z-20 border border-slate-100 dark:border-slate-800">
                            <span className="block text-4xl font-bold text-indigo-600">12+</span>
                            <span className="text-sm font-medium text-slate-500">Years of Experience</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Crafting Excellence Since 2012</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            We started with a simple vision: to bring artistry back to every day objects. Our team of designers and curators travel the globe to source materials that meet our rigorous standards of ethics and quality.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Eco-friendly materials", "Direct-to-consumer prices", "Ethical manufacturing"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                                        <ShieldCheck size={16} className="text-indigo-600" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="px-8 py-3 bg-slate-900 dark:bg-indigo-600 text-white rounded-full font-bold hover:bg-slate-800 dark:hover:bg-indigo-700 transition-all">Discover More</button>
                    </div>
                </div>
            </section>

            {/* 5. Trending Products Preview */}
            <section className="py-24 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Trending Now</h2>
                        <p className="text-indigo-100 max-w-2xl mx-auto">Handpicked best sellers that our community loves. Get them before they're gone.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-xl flex flex-col group">
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                                    <img src={`https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop`} alt="product" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md rounded-full p-2 text-rose-500 cursor-pointer border border-white/50">
                                        <Star size={18} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Premium Headset X{i}</h3>
                                <p className="text-slate-500 text-sm mb-4">Noise cancelling signature sound</p>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="text-2xl font-bold text-indigo-600">$299.00</span>
                                    <button className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-slate-900 transition-colors">
                                        <PlusCircle size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Testimonials Section */}
            <section className="py-24 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Voices of Our Community</h2>
                        <div className="flex justify-center gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={20} fill="#f59e0b" className="text-amber-500" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { text: "Absolutely stunning quality. I've never seen such attention to detail in online shopping before. Highly recommended!", name: "Sarah Johnson", role: "Interior Designer" },
                            { text: "The customer support is out of this world. They helped me pick the right size and the shipping was incredibly fast.", name: "Michael Chen", role: "Tech Enthusiast" },
                            { text: "I've been a regular customer for 2 years. Prodex never fails to deliver premium goods that actually last.", name: "Elena Rodriguez", role: "Professional Chef" },
                        ].map((t, i) => (
                            <motion.div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <p className="text-slate-600 dark:text-slate-400 italic mb-8">"{t.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 40}`} alt={t.name} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">{t.name}</h4>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Newsletter Section */}
            <section className="py-24 bg-white dark:bg-zinc-950 px-4">
                <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-violet-600 to-indigo-700 py-16 px-8 md:px-20 relative overflow-hidden text-center shadow-2xl">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Join the Inner Circle</h2>
                    <p className="text-indigo-100 mb-10 text-lg max-w-xl mx-auto relative z-10">Subscribe to get early access to new collections and exclusive discounts delivered to your inbox.</p>

                    <div className="max-w-md mx-auto relative z-10 flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Your email address" className="flex-grow px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/40" />
                        <button className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-full hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                            Subscribe <Send size={18} />
                        </button>
                    </div>
                    <p className="mt-6 text-xs text-indigo-200/60 relative z-10">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </section>
        </div>
    );
}
