"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 overflow-hidden">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
                <Image
  src="/logo.png"
  alt="Logo"
  width={160}
  height={80}
  className="object-contain h-28 w-auto"
/>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center text-lg font-[700]">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
            {/* <Link href="/signin" className="text-gray-700 hover:text-blue-600">
              Sign In
            </Link> */}
<a
  href="https://wa.me/2347031031944"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#0E641B] hover:bg-green-800 text-white px-4 py-3 rounded-lg text-lg font-semibold"
>
  Request yours
</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-md">
          <Link href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-blue-600">
            About Us
          </Link>
          <Link href="/pricing" className="block text-gray-700 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
          {/* <Link href="/signin" className="block text-gray-700 hover:text-blue-600">
            Sign In
          </Link> */}
          <a
  href="https://wa.me/2347031031944"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#0E641B] hover:bg-green-800 text-white px-8 py-3 rounded-lg text-lg font-semibold"
>
  Request yours
</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
