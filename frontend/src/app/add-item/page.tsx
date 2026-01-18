"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Plus, Image as ImageIcon, Tag, FileText, DollarSign, Loader2, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AddItemPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
        category: "Electronics",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post("http://localhost:5000/api/items", {
                ...formData,
                price: parseFloat(formData.price),
            });
            setSuccess(true);
            setTimeout(() => {
                router.push("/items");
            }, 2000);
        } catch (err) {
            console.error("Error adding item:", err);
            alert("Failed to add item. Ensure the backend server is running on port 5000.");
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950 px-4">
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-2xl text-center flex flex-col items-center">
                    <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Product Listed!</h2>
                    <p className="text-slate-500 mb-8 max-w-xs">Your premium item has been added to the catalog and is now live.</p>
                    <div className="flex gap-4">
                        <Link href="/items" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-bold shadow-lg shadow-indigo-500/20">
                            View items
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 px-4 py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <Link href="/items" className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 font-bold mb-8 transition-colors">
                    <ArrowLeft size={20} /> Back to Collection
                </Link>

                <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-violet-600"></div>

                    <div className="mb-10">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">Supply Your Craft</h1>
                        <p className="text-slate-500">Add a new premium item to the Prodex inventory.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                    <Tag size={16} className="text-indigo-600" /> Item Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                    placeholder="e.g. Minimalist Desk Lamp"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                    <DollarSign size={16} className="text-indigo-600" /> Price (USD)
                                </label>
                                <input
                                    required
                                    type="number"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                    placeholder="199.99"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                <FileText size={16} className="text-indigo-600" /> Description
                            </label>
                            <textarea
                                required
                                rows={4}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-medium resize-none"
                                placeholder="Describe the premium features and craftsmanship..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                    <ImageIcon size={16} className="text-indigo-600" /> Image URL
                                </label>
                                <input
                                    required
                                    type="url"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-medium"
                                    placeholder="https://images.unsplash.com/..."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                                    <Tag size={16} className="text-indigo-600" /> Category
                                </label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 transition-all font-medium appearance-none"
                                >
                                    <option>Electronics</option>
                                    <option>Lifestyle</option>
                                    <option>Accessories</option>
                                    <option>Furniture</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-6">
                            <button disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-70">
                                {loading ? <Loader2 className="animate-spin" /> : <Plus size={20} />}
                                List Premium Item
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
