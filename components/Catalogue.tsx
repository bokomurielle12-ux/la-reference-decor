"use client";

import { useState } from "react";
import { FaSearch, FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    title: "Décoration de mariage",
    category: "Mariage",
    price: "À partir de 150 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
  },
  {
    id: 2,
    title: "Décoration anniversaire",
    category: "Anniversaire",
    price: "À partir de 50 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
  },
  {
    id: 3,
    title: "Décoration conférence",
    category: "Entreprise",
    price: "Sur devis",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
  },
  {
    id: 4,
    title: "Fauteuil Royal",
    category: "Location",
    price: "15 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
  },
  {
    id: 5,
    title: "Arche Florale",
    category: "Location",
    price: "25 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=900",
  },
  {
    id: 6,
    title: "Décoration de salle",
    category: "Évènement",
    price: "À partir de 100 000 FCFA",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900",
  },
];

export default function Catalogue() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="catalogue"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Catalogue
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5">
            Nos produits et prestations
          </h2>

        </div>

        {/* Recherche */}

        <div className="max-w-xl mx-auto mt-14 relative">

          <FaSearch className="absolute left-5 top-5 text-gray-400" />

          <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-full py-4 pl-14 pr-6 shadow-md"
          />

        </div>

        {/* Produits */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

          {filtered.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 duration-300"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-8">

                <span className="bg-[#006633] text-white px-4 py-2 rounded-full text-sm">

                  {item.category}

                </span>

                <h3 className="text-2xl font-bold mt-6">

                  {item.title}

                </h3>

                <p className="text-[#ff6600] text-xl font-bold mt-4">

                  {item.price}

                </p>

                <div className="flex gap-4 mt-8">

                  <button className="flex-1 bg-[#006633] text-white py-3 rounded-full hover:bg-green-800">

                    Réserver

                  </button>

                  <a
                    href="https://wa.me/2290196368779"
                    target="_blank"
                    className="bg-[#25D366] text-white p-4 rounded-full"
                  >
                    <FaWhatsapp />
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}