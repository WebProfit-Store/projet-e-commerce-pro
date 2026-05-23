"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-violet-600" />
          <span className="text-lg font-bold text-white">
            Nova AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/shop"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Boutique
          </Link>

          <Link
            href="/categories"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            Catégories
          </Link>

          <Link
            href="/about"
            className="text-sm text-zinc-300 transition hover:text-white"
          >
            À propos
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* AI Button */}
          <button className="hidden items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500 md:flex">
            <Sparkles size={16} />
            Assistant IA
          </button>

          {/* Cart */}
          <button className="relative rounded-full border border-zinc-800 p-2 text-white transition hover:bg-zinc-900">
            <ShoppingCart size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-xs text-white">
              0
            </span>
          </button>

          {/* Mobile Menu */}
          <button className="rounded-full border border-zinc-800 p-2 text-white transition hover:bg-zinc-900 md:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}