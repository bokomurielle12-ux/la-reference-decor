"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes, FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6">

        {/* LOGO */}

        <a href="/" className="flex items-center">

          <Image
  
            src="/images/logo/logo.png"
            alt="La Référence Coiffure & Décor"
           width={80}
           height={60}
            priority
            className="object-contain"
          />

        </a>

        {/* MENU */}

        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-800">

          <a href="#home" className="hover:text-[#ff6600] duration-300">
            Accueil
          </a>

          <a href="#about" className="hover:text-[#ff6600] duration-300">
            À propos
          </a>

          <a href="#services" className="hover:text-[#ff6600] duration-300">
            Services
          </a>

          <a href="#gallery" className="hover:text-[#ff6600] duration-300">
            Réalisations
          </a>

          <a href="#catalogue" className="hover:text-[#ff6600] duration-300">
            Catalogue
          </a>

          <a href="#reservation" className="hover:text-[#ff6600] duration-300">
            Réservation
          </a>

          <a href="#contact" className="hover:text-[#ff6600] duration-300">
            Contact
          </a>

        </nav>

        {/* ACTIONS */}

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="https://wa.me/2290196368779"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaWhatsapp size={22} />
          </a>

          <a
            href="#contact"
            className="bg-[#ff6600] hover:bg-orange-600 text-white px-7 py-3 rounded-full flex items-center gap-3 font-semibold duration-300"
          >
            Demander un devis

            <FaArrowRight />
          </a>

        </div>

        {/* MENU MOBILE */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-[#006633]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (

        <nav className="lg:hidden bg-white shadow-lg">

          <a href="#home" className="block px-6 py-4">
            Accueil
          </a>

          <a href="#about" className="block px-6 py-4">
            À propos
          </a>

          <a href="#services" className="block px-6 py-4">
            Services
          </a>

          <a href="#gallery" className="block px-6 py-4">
            Réalisations
          </a>

          <a href="#catalogue" className="block px-6 py-4">
            Catalogue
          </a>

          <a href="#reservation" className="block px-6 py-4">
            Réservation
          </a>

          <a href="#contact" className="block px-6 py-4">
            Contact
          </a>

          <a
            href="#contact"
            className="block mx-6 my-5 text-center bg-[#ff6600] text-white py-3 rounded-full"
          >
            Demander un devis
          </a>

        </nav>

      )}

    </header>
  );
}