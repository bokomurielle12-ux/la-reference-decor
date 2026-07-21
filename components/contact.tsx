"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Contact
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5">
            Parlons de votre projet
          </h2>

          <p className="text-lg text-gray-600 mt-6">
            Nous sommes disponibles pour répondre à toutes vos demandes.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Informations */}

          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-[#006633] mb-8">
              Nos coordonnées
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-[#006633] text-white flex items-center justify-center">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h4 className="font-bold">
                    Téléphone
                  </h4>

                  <p>+229 01 96 36 87 79</p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center">

                  <FaWhatsapp />

                </div>

                <div>

                  <h4 className="font-bold">
                    WhatsApp
                  </h4>

                  <p>+229 01 96 36 87 79</p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-[#ff6600] text-white flex items-center justify-center">

                  <FaEnvelope />

                </div>

                <div>

                  <h4 className="font-bold">
                    Email
                  </h4>

                  <p>contact@referencedecor.com</p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="w-14 h-14 rounded-full bg-gray-700 text-white flex items-center justify-center">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h4 className="font-bold">
                    Adresse
                  </h4>

                  <p>Cotonou - Bénin</p>

                </div>

              </div>

            </div>

          </div>

          {/* Formulaire */}

          <form className="bg-white rounded-3xl shadow-xl p-10 space-y-6">

            <input
              type="text"
              placeholder="Nom complet"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="w-full border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Sujet"
              className="w-full border rounded-xl p-4"
            />

            <textarea
              rows={6}
              placeholder="Votre message..."
              className="w-full border rounded-xl p-4"
            />

            <button
              className="bg-[#006633] text-white px-10 py-4 rounded-full flex items-center gap-3 hover:bg-green-800 duration-300"
            >
              Envoyer

              <FaPaperPlane />

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}