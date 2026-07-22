"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Murielle Boko",
    role: "Cliente",
    message:
      "Une décoration magnifique ! Mon mariage a dépassé toutes mes attentes. Je recommande vivement La Référence Coiffure & Décor.",
  },
  {
    id: 2,
    name: "Jean Houngbédji",
    role: "Entreprise",
    message:
      "Une équipe professionnelle, ponctuelle et très créative. Nos invités ont été impressionnés.",
  },
  {
    id: 3,
    name: "Grâce A.",
    role: "Particulière",
    message:
      "Excellent service, matériel de qualité et très bon accompagnement du début à la fin.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Témoignages
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-4">
            Ce que disent nos clients
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <FaQuoteLeft className="text-5xl text-[#ff6600]" />

              <p className="mt-6 text-gray-600 leading-8">
                {item.message}
              </p>

              <div className="flex mt-6 text-yellow-500 gap-1">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <h3 className="mt-6 text-xl font-bold text-[#006633]">
                {item.name}
              </h3>

              <p className="text-gray-500">
                {item.role}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}