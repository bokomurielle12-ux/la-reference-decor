"use client";

import { FaPaperPlane } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="py-20 bg-[#ff6600]">

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-5xl font-bold">
          Restez informé
        </h2>

        <p className="mt-6 text-xl">
          Recevez nos nouveautés, offres spéciales et inspirations déco.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10">

          <input
            type="email"
            placeholder="Votre adresse e-mail"
            className="flex-1 bg-white text-black rounded-full px-6 py-4 outline-none"
          />

          <button className="bg-[#006633] px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-green-800 duration-300">

            S'abonner

            <FaPaperPlane />

          </button>

        </div>

      </div>

    </section>
  );
}