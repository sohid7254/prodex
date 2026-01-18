import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-950 border-t border-gray-100 dark:border-zinc-900">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic">Prodex</span>
                        <p className="mt-4 text-gray-500 max-w-xs">The ultimate destination for premium quality products. We bring you the best deals from around the world.</p>
                        <div className="flex space-x-6 mt-6">
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Shop</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/items" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                                    Featured
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                                    New Arrivals
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-base text-gray-500 hover:text-indigo-600 transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-100 dark:border-zinc-900 pt-8 flex justify-center">
                    <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} Prodex Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
