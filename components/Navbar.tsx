// "use client";

// export default function Navbar() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">

//       <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

//         <div>

//           <h1 className="text-2xl font-bold text-[#006633]">
//             LA RÉFÉRENCE
//           </h1>

//           <p className="text-[#ff6600] text-sm">
//             COIFFURE & DÉCOR
//           </p>

//         </div>

//         <nav className="hidden lg:flex gap-8">

//           <a href="#home">Accueil</a>

//           <a href="#about">À propos</a>

//           <a href="#services">Services</a>

//           <a href="#gallery">Réalisations</a>

//           <a href="#catalogue">Catalogue</a>

//           <a href="#reservation">Réservation</a>

//           <a href="#contact">Contact</a>

//         </nav>

//       </div>

//     </header>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}

        <a href="/" className="flex items-center">

          <Image
            src="/logo.svg"
            alt="La Référence Coiffure & Décor"
            width={170}
            height={70}
            priority
          />

        </a>

        {/* MENU DESKTOP */}

        <nav className="hidden lg:flex items-center gap-8 font-medium">

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

          <a
            href="https://wa.me/2290196368779"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white w-11 h-11 rounded-full flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaWhatsapp size={22} />
          </a>

        </nav>

        {/* BOUTON MOBILE */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-[#006633]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MENU MOBILE */}

      {menuOpen && (

        <nav className="lg:hidden bg-white border-t shadow-md">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Accueil
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            À propos
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Services
          </a>

          <a
            href="#gallery"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Réalisations
          </a>

          <a
            href="#catalogue"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Catalogue
          </a>

          <a
            href="#reservation"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Réservation
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-gray-100"
          >
            Contact
          </a>

          <a
            href="https://wa.me/2290196368779"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 text-[#25D366] font-semibold hover:bg-gray-100"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </nav>

      )}

    </header>
  );
}
