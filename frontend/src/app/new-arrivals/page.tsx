"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";

interface Item {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
    createdAt?: string;
}

export default function NewArrivalsPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/items");
                // Already sorted by _id or createdAt in backend, but just in case
                setItems(res.data.slice(0, 8));
            } catch (err) {
                console.error("Error fetching items:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 py-20">
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                            <Sparkles size={20} />
                        </div>
                        <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Fresh Off The Craft</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tighter">New Arrivals</h1>
                    <p className="text-slate-500 text-lg mt-2">Discover the latest additions to our premium collection.</p>
                </motion.div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-40 gap-4">
                        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                    </div>
                ) : items.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {items.map((item, idx) => (
                            <motion.div key={item._id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden">
                                <Link href={`/items/${item._id}`} className="block">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1 block">{item.category || "Premium"}</span>
                                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">{item.name}</h3>
                                            </div>
                                            <span className="text-2xl font-bold text-indigo-600">${item.price}</span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-2">{item.description}</p>
                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors uppercase">
                                            Explore Product <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Nothing new today</h3>
                        <p className="text-slate-500 mt-2">We're constantly crafting new pieces. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
