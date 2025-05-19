"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Calendar, ChartBar, Menu, Notebook, Pickaxe, Settings, TrendingUp, User, LogOut } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200 shadow-sm bg-white">


            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7DFF]"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-16 left-4 bg-white shadow-lg rounded-lg py-2 w-40 z-50 h-full">
                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <User className="w-4 h-4 text-gray-700 items-center" /> Profile
                        </div>
                    </a>

                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <Calendar className="w-4 h-4 text-gray-700 items-center" /> Calendário
                        </div>
                    </a>

                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <Notebook className="w-4 h-4 text-gray-700 items-center" /> Agendar Post
                        </div>
                    </a>

                    <a href="/create-post">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <Pickaxe className="w-4 h-4 text-gray-700 items-center" /> Criar Post
                        </div>
                    </a>

                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <ChartBar className="w-4 h-4 text-gray-700 items-center" /> Análises
                        </div>
                    </a>

                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <TrendingUp className="w-4 h-4 text-gray-700 items-center" /> É trend!
                        </div>
                    </a>

                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <Settings className="w-4 h-4 text-gray-700 items-center" /> Configurações
                        </div>
                    </a>

                    <a href="/">
                        <div className="flex align-middle justify-start mt-3 gap-x-2">
                            <LogOut className="w-4 h-4 text-gray-700 items-center" /> Logout
                        </div>
                    </a>

                </div>
            )}

            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                    src="/logo-viralzy.png"
                    alt="Viralzy Logo"
                    width={40}
                    height={40}
                />
                <span className="ml-2 text-xl font-bold text-[#3A7DFF]">Viralzy</span>
            </Link>
        </header>
    );
}
