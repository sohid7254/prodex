"use client";

import Link from "next/link";
import { ShoppingCart, User, PlusCircle, LogOut, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Initial user check
        const savedUser = Cookies.get("user");
        if (savedUser) setUser(savedUser);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        Cookies.remove("user");
        setUser(null);
        window.location.href = "/";
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-zinc-950/80" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">Prodex</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <Link href="/" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Home
                            </Link>
                            <Link href="/items" className="hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Items
                            </Link>
                            {user && (
                                <Link href="/add-item" className="flex items-center gap-1 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    <PlusCircle size={18} />
                                    Add Item
                                </Link>
                            )}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">Hi, {user}</span>
                                <button onClick={handleLogout} className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition-colors">
                                    <LogOut size={18} />
                                    <span className="text-sm font-medium">Logout</span>
                                </button>
                            </div>
                        ) : (
                            <Link href="/login" className="flex items-center gap-1 bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
                                <User size={18} />
                                Login
                            </Link>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-800 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                            Home
                        </Link>
                        <Link href="/items" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                            Items
                        </Link>
                        {user && (
                            <Link href="/add-item" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                                Add Item
                            </Link>
                        )}
                        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-zinc-800">
                            {user ? (
                                <div className="px-3 space-y-3">
                                    <div className="text-sm font-medium text-gray-500">Logged in as {user}</div>
                                    <button onClick={handleLogout} className="w-full text-left flex items-center gap-2 text-red-600 font-medium">
                                        <LogOut size={18} /> Logout
                                    </button>
                                </div>
                            ) : (
                                <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white text-center">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
