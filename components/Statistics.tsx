"use client";

import { FaUsers, FaAward, FaCalendarAlt, FaSmile } from "react-icons/fa";

export default function Statistics() {
  return (
    <section className="bg-[#006633] py-20 text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div className="text-center">

          <FaUsers className="text-5xl mx-auto text-[#ff6600]" />

          <h2 className="text-5xl font-bold mt-5">
            500+
          </h2>

          <p className="mt-3">
            Clients satisfaits
          </p>

        </div>

        <div className="text-center">

          <FaCalendarAlt className="text-5xl mx-auto text-[#ff6600]" />

          <h2 className="text-5xl font-bold mt-5">
            700+
          </h2>

          <p className="mt-3">
            Évènements réalisés
          </p>

        </div>

        <div className="text-center">

          <FaAward className="text-5xl mx-auto text-[#ff6600]" />

          <h2 className="text-5xl font-bold mt-5">
            5+
          </h2>

          <p className="mt-3">
            Années d'expérience
          </p>

        </div>

        <div className="text-center">

          <FaSmile className="text-5xl mx-auto text-[#ff6600]" />

          <h2 className="text-5xl font-bold mt-5">
            100%
          </h2>

          <p className="mt-3">
            Satisfaction
          </p>

        </div>

      </div>

    </section>
  );
}
