"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Search, SlidersHorizontal, Star, Plus, Loader2, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Item {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
}

export default function ItemsPage() {
    const [items, setItems] = useState<Item[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/items");
                setItems(res.data);
            } catch (err) {
                console.error("Error fetching items:", err);
                // Fallback mock data if server isn't running yet
                setItems([
                    { _id: "1", name: "Premium Watch", description: "Elegant time piece", price: 199, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" },
                    { _id: "2", name: "Wireless Buds", description: "Superior sound", price: 129, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop" },
                    { _id: "3", name: "Designer Bag", description: "Leather collection", price: 450, image: "https://images.unsplash.com/photo-1584917033904-47e13009168e?q=80&w=400&auto=format&fit=crop" },
                ]);
            } finally {
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    const filteredItems = items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()) && (activeCategory === "All" || item.category === activeCategory));

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">Exclusive Collection</h1>
                        <p className="text-slate-500">Discover items that define excellence</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                            />
                        </div>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 transition-all">
                            <SlidersHorizontal size={18} />
                            Filters
                        </button>
                    </div>
                </div>

                {/* Categories Bar */}
                <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide no-scrollbar">
                    {["All", "Electronics", "Lifestyle", "Accessories", "Furniture"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
                                activeCategory === cat ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-40 gap-4">
                        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
                        <p className="text-slate-500 font-medium">Curating your experience...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <AnimatePresence>
                            {filteredItems.map((item, idx) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    key={item._id}
                                    className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/5 transition-all"
                                >
                                    <Link href={`/items/${item._id}`} className="block">
                                        <div className="relative h-72 overflow-hidden">
                                            <img src={item.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl px-3 py-1 font-bold text-sm text-slate-900 border border-white/50">${item.price}</div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{item.name}</h3>
                                                <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 mb-6">{item.description}</p>

                                            <div className="flex items-center justify-between">
                                                <div className="flex text-amber-500">
                                                    {[1, 2, 3, 4, 5].map((i) => (
                                                        <Star key={i} size={14} fill="currentColor" />
                                                    ))}
                                                </div>
                                                <button className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                    <Plus size={16} />
                                                    Details
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {!loading && filteredItems.length === 0 && (
                    <div className="text-center py-40">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">No items found</h3>
                        <p className="text-slate-500 mt-2">Try adjusting your filters or search term.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
