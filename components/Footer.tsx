// export default function Footer() {
//   return (
//     <footer className="bg-[#006633] text-white pt-20 pb-8">

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-12">

//         <div>

//           <h2 className="text-3xl font-bold">
//             LA RÉFÉRENCE
//           </h2>

//           <p className="text-orange-400 font-semibold">
//             COIFFURE & DÉCOR
//           </p>

//           <p className="mt-6 text-gray-200 leading-8">
//             Votre partenaire de confiance pour tous vos projets
//             de décoration intérieure, extérieure et événementielle.
//           </p>

//         </div>

//         <div>

//           <h3 className="text-2xl font-bold mb-6">
//             Navigation
//           </h3>

//           <ul className="space-y-3">

//             <li><a href="#">Accueil</a></li>
//             <li><a href="#about">À propos</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#gallery">Réalisations</a></li>
//             <li><a href="#catalogue">Catalogue</a></li>

//           </ul>

//         </div>

//         <div>

//           <h3 className="text-2xl font-bold mb-6">
//             Services
//           </h3>

//           <ul className="space-y-3">

//             <li>Décoration intérieure</li>
//             <li>Décoration extérieure</li>
//             <li>Décoration événementielle</li>
//             <li>Aménagement de bureaux</li>
//             <li>Location d'objets</li>

//           </ul>

//         </div>

//         <div>

//           <h3 className="text-2xl font-bold mb-6">
//             Contact
//           </h3>

//           <p>📞 (+229) 01 95 14 88 00</p>

//           <p className="mt-3">
//             💬 (+229) 01 96 36 87 79
//           </p>

//           <p className="mt-3">
//             📍 Bénin
//           </p>

//           <p className="mt-3">
//             ✉ contact@lareferencedecor.com
//           </p>

//         </div>

//       </div>

//       <div className="border-t border-green-700 mt-16 pt-8 text-center">

//         <p>

//           © 2026 LA RÉFÉRENCE COIFFURE & DÉCOR.
//           Tous droits réservés.

//         </p>

//         <p className="mt-3 text-gray-300">

//           Conçu par Murielle Boko

//         </p>

//       </div>

//     </footer>
//   );
// }
"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#006633] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-12">

        {/* Entreprise */}

        <div>

          <h2 className="text-3xl font-bold">
            LA RÉFÉRENCE
          </h2>

          <p className="text-[#ffcc99] mb-6">
            COIFFURE & DÉCOR
          </p>

          <p className="leading-8 text-gray-200">

            Votre partenaire pour la décoration intérieure,
            extérieure, événementielle et la location
            d'objets de décoration.

          </p>

        </div>

        {/* Liens */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Navigation
          </h3>

          <ul className="space-y-4">

            <li><a href="#home">Accueil</a></li>

            <li><a href="#about">À propos</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#gallery">Réalisations</a></li>

            <li><a href="#catalogue">Catalogue</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Contact
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">

              <FaPhoneAlt />

              <span>+229 01 96 36 87 79</span>

            </div>

            <div className="flex gap-3">

              <FaWhatsapp />

              <span>+229 01 96 36 87 79</span>

            </div>

            <div className="flex gap-3">

              <FaEnvelope />

              <span>contact@referencedecor.com</span>

            </div>

            <div className="flex gap-3">

              <FaMapMarkerAlt />

              <span>Cotonou - Bénin</span>

            </div>

          </div>

        </div>

        {/* Réseaux */}

        <div>

          <h3 className="text-2xl font-bold mb-6">
            Suivez-nous
          </h3>

          <div className="flex gap-5">

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-[#006633] flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-[#006633] flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white text-[#006633] flex items-center justify-center"
            >
              <FaTiktok />
            </a>

            <a
              href="https://wa.me/2290196368779"
              className="w-12 h-12 rounded-full bg-white text-[#25D366] flex items-center justify-center"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="border-t border-green-700 py-6 text-center">

        © 2026 LA RÉFÉRENCE COIFFURE & DÉCOR • Tous droits réservés.

      </div>

    </footer>
  );
}