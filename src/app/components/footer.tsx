import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
    <div className="h-[30px] w-full bg-[#73C633]"></div>
    <footer className="bg-[#2d2d2d] text-white px-8 py-12 md:px-14 text-md md:text-lg">
    
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-2">
        {/* Left: Logo Section */}
        <div className="flex flex-col items-start">

          <Link href="/">
          <Image
            src="/logo.png"
            alt="Scancodes Logo"
            width={120}
            height={120}
            className="mb-2"
          />
          </Link>
          {/* <span className="text-white text-lg font-semibold tracking-widest">
            SCANCODES
          </span> */}
        </div>

        {/* Right: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {/* About Us */}
          <div>
            <h4 className="text-[#73C633] font-bold mb-2">About Us</h4>
            <ul className="space-y-1 font-medium text-white">
              <li>Mission</li>
              <li>Team</li>
              <li>Newsletter</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[#73C633] font-bold mb-2">Support</h4>
            <ul className="space-y-1 font-medium text-white">
              <li>Contact</li>
              <li>Pricing</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-[#73C633] font-bold mb-2">Social</h4>
            <ul className="space-y-1 font-medium text-white">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Facebook</li>
              <li>Tiktok</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-[#73C633] font-bold mb-2">Features</h4>
            <ul className="space-y-1 font-medium text-white">
              <li>Restaurant menu</li>
              <li>Tickets/Event</li>
              <li>Host QR code</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
