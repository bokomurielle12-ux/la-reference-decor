// export default function About() {
//   return (
//     <section
//       id="about"
//       className="py-24 bg-white"
//     >
//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

//         {/* Image */}

//         <div>

//           <img
//             src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900"
//             alt="À propos"
//             className="rounded-[35px] shadow-xl w-full h-[550px] object-cover"
//           />

//         </div>

//         {/* Texte */}

//         <div>

//           <span className="text-[#ff6600] font-semibold uppercase tracking-widest">
//             Qui sommes-nous ?
//           </span>

//           <h2 className="text-5xl font-bold text-[#006633] mt-4">
//             LA RÉFÉRENCE COIFFURE & DÉCOR
//           </h2>

//           <p className="mt-8 text-gray-600 leading-8 text-lg">

//             Depuis plusieurs années, nous mettons notre créativité
//             et notre savoir-faire au service des particuliers,
//             entreprises, hôtels, églises et salles de fêtes.

//           </p>

//           <p className="mt-6 text-gray-600 leading-8 text-lg">

//             Notre objectif est de créer des espaces élégants,
//             chaleureux et mémorables pour chaque événement.

//           </p>

//           <div className="grid grid-cols-2 gap-6 mt-10">

//             <div className="bg-green-50 rounded-3xl p-6">

//               <h3 className="text-4xl font-bold text-[#006633]">
//                 500+
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Clients satisfaits
//               </p>

//             </div>

//             <div className="bg-orange-50 rounded-3xl p-6">

//               <h3 className="text-4xl font-bold text-[#ff6600]">
//                 10+
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Années d'expérience
//               </p>

//             </div>

//             <div className="bg-green-50 rounded-3xl p-6">

//               <h3 className="text-4xl font-bold text-[#006633]">
//                 300+
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Évènements décorés
//               </p>

//             </div>

//             <div className="bg-orange-50 rounded-3xl p-6">

//               <h3 className="text-4xl font-bold text-[#ff6600]">
//                 100%
//               </h3>

//               <p className="mt-2 text-gray-600">
//                 Professionnalisme
//               </p>

//             </div>

//           </div>

//           <a
//             href="#services"
//             className="inline-block mt-10 bg-[#006633] text-white px-8 py-4 rounded-full hover:bg-green-800 duration-300"
//           >
//             Découvrir nos services
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Images */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-5"
        >

          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900"
            alt="Décoration"
            className="rounded-3xl h-80 w-full object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900"
            alt="Mariage"
            className="rounded-3xl h-80 w-full object-cover mt-10"
          />

        </motion.div>

        {/* Texte */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="text-[#ff6600] uppercase tracking-[5px] font-semibold">
            À propos
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5 leading-tight">
            Votre partenaire de confiance pour une décoration exceptionnelle.
          </h2>

          <p className="text-gray-600 text-lg mt-8 leading-9">
            LA RÉFÉRENCE COIFFURE & DÉCOR accompagne les particuliers,
            entreprises, hôtels, églises et organisateurs d'événements
            dans la création d'espaces élégants et mémorables.
          </p>

          <div className="space-y-5 mt-10">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-[#006633] text-2xl" />
              <p>Décoration intérieure et extérieure</p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-[#006633] text-2xl" />
              <p>Décoration de mariages et anniversaires</p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-[#006633] text-2xl" />
              <p>Location de matériel de décoration</p>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-[#006633] text-2xl" />
              <p>Aménagement de bureaux et espaces professionnels</p>
            </div>

          </div>

          <button className="mt-12 bg-[#006633] text-white px-10 py-4 rounded-full hover:bg-green-800 duration-300">

            En savoir plus

          </button>

        </motion.div>

      </div>
    </section>
  );
}