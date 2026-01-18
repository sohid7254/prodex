"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { ArrowLeft, Star, ShoppingCart, Heart, Shield, Truck, RotateCcw, Loader2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Item {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category?: string;
    features?: string[];
}

export default function ItemDetailsPage() {
    const { id } = useParams();
    const router = useRouter();
    const [item, setItem] = useState<Item | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
                const res = await axios.get(`${apiUrl}/api/items/${id}`);
                setItem(res.data);
            } catch (err) {
                console.error("Error fetching item details:", err);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchItem();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-zinc-950">
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
            </div>
        );
    }

    if (!item) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950 px-4">
                <h2 className="text-3xl font-bold mb-4">Item Not Found</h2>
                <Link href="/items" className="text-indigo-600 font-bold flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
                <button onClick={() => router.back()} className="group flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-8 transition-colors">
                    <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center group-hover:border-indigo-600 transition-all">
                        <ArrowLeft size={20} />
                    </div>
                    Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Image Gallery */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                        <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl">
                            <img src={item.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="aspect-square rounded-2xl overflow-hidden bg-slate-50 cursor-pointer border border-transparent hover:border-indigo-600 transition-all opacity-60 hover:opacity-100">
                                    <img src={item.image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"} alt="thumbnail" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Product Details */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider">New Arrival</span>
                            <div className="flex text-amber-500">
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                                <Star size={14} fill="currentColor" />
                            </div>
                            <span className="text-xs text-slate-400 font-bold">(124 Reviews)</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">{item.name}</h1>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-4xl font-bold text-indigo-600">${item.price}</span>
                            <span className="text-lg text-slate-400 line-through">${(item.price * 1.4).toFixed(0)}</span>
                            <span className="text-sm font-bold text-emerald-500">Save 40%</span>
                        </div>

                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            {item.description}. Experience the pinnacle of design and performance with the {item.name}. Meticulously crafted using only the finest materials, this piece is designed to elevate your everyday lifestyle with effortless sophistication.
                        </p>

                        {/* Quantity and Actions */}
                        <div className="flex flex-wrap gap-4 mb-10">
                            <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-2xl p-1 px-4 h-16 border border-slate-200 dark:border-slate-800">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-indigo-600 transition-colors">
                                    <Minus size={18} />
                                </button>
                                <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-indigo-600 transition-colors">
                                    <Plus size={18} />
                                </button>
                            </div>

                            <button className="flex-grow flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-16 rounded-2xl shadow-xl shadow-indigo-500/20 transition-all active:scale-[0.98]">
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>

                            <button
                                onClick={() => setIsLiked(!isLiked)}
                                className={`w-16 h-16 rounded-2xl border flex items-center justify-center transition-all ${isLiked ? "bg-rose-50 border-rose-100 text-rose-500" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400"}`}
                            >
                                <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-indigo-600">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Free Delivery</h4>
                                    <p className="text-xs text-slate-500">Orders over $150</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-indigo-600">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">2 Year Warranty</h4>
                                    <p className="text-xs text-slate-500">100% Guaranteed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
