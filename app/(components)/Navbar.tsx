"use client";
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-retro-blue border-b-4 border-black shadow-retro fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="font-pixel text-retro-pink text-2xl hover:scale-105 transition-transform">
              The International Gallery
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="font-pixel text-white px-4 py-2 border-4 border-black bg-retro-red hover:bg-retro-pink hover:text-black transition-all"
            >
              HOME
            </Link>
            <Link
              href="/collections"
              className="font-pixel text-white px-4 py-2 border-4 border-black bg-retro-green hover:bg-retro-yellow hover:text-black transition-all"
            >
              COLLECTIONS
            </Link>
            <Link
              href="/about"
              className="font-pixel text-white px-4 py-2 border-4 border-black bg-retro-purple hover:bg-retro-pink hover:text-black transition-all"
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
