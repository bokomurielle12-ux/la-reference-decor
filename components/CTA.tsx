"use client";

import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="py-24 bg-[#006633]">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white leading-tight">

          Faites de votre événement
          <br />
          un moment inoubliable.

        </h2>

        <p className="text-green-100 text-xl mt-8 max-w-3xl mx-auto leading-9">

          Notre équipe est à votre disposition pour réaliser vos
          projets de décoration intérieure, extérieure et
          événementielle.

        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          <a
            href="#reservation"
            className="bg-[#ff6600] text-white px-10 py-4 rounded-full hover:bg-orange-600 duration-300 flex items-center gap-3"
          >

            Réserver maintenant

            <FaArrowRight />

          </a>

          <a
            href="https://wa.me/2290166022249"
            target="_blank"
            className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-[#006633] duration-300 flex items-center gap-3"
          >

            <FaWhatsapp />

            WhatsApp

          </a>

        </div>

      </div>

    </section>
  );
}