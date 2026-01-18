"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowUpRight, Plus, Loader2 } from "lucide-react";
import Link from "next/link";

interface Item {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
}

export default function FeaturedPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/items");
                // For featured, just take the top 4 for now
                setItems(res.data.slice(0, 4));
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
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Featured Selection</h1>
                    <p className="text-slate-500 text-lg">Our handpicked premium favorites for this season.</p>
                </motion.div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-40 gap-4">
                        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                    </div>
                ) : items.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {items.map((item, idx) => (
                            <motion.div
                                key={item._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden group hover:shadow-2xl transition-all"
                            >
                                <Link href={`/items/${item._id}`} className="block">
                                    <div className="relative h-72 overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-1 font-bold text-sm text-slate-900 border border-white/50">${item.price}</div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{item.name}</h3>
                                        <p className="text-slate-500 text-sm line-clamp-2 mb-6">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex text-amber-500">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <Star key={i} size={14} fill="currentColor" />
                                                ))}
                                            </div>
                                            <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition-all" size={20} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-40">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Coming Soon</h3>
                        <p className="text-slate-500 mt-2">Check back later for our curated selection.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
