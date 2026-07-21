// export default function Services() {
//   const services = [
//     {
//       title: "Décoration intérieure",
//       description:
//         "Transformez votre maison, votre bureau ou votre espace professionnel en un lieu moderne et accueillant.",
//       image:
//         "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=900",
//       icon: "🏠",
//     },
//     {
//       title: "Décoration extérieure",
//       description:
//         "Mise en valeur des espaces extérieurs avec des décorations élégantes adaptées à tous les événements.",
//       image:
//         "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900",
//       icon: "🌳",
//     },
//     {
//       title: "Décoration événementielle",
//       description:
//         "Mariages, anniversaires, conférences, baptêmes, soirées privées et cérémonies officielles.",
//       image:
//         "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900",
//       icon: "🎉",
//     },
//     {
//       title: "Aménagement de bureaux",
//       description:
//         "Création d'espaces de travail modernes, élégants et fonctionnels.",
//       image:
//         "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
//       icon: "🏢",
//     },
//     {
//       title: "Location d'objets",
//       description:
//         "Location de chaises, tables, arches, vases, rideaux, luminaires et accessoires décoratifs.",
//       image:
//         "https://images.unsplash.com/photo-1519741497674-611481863552?w=900",
//       icon: "🪑",
//     },
//     {
//       title: "Conseils personnalisés",
//       description:
//         "Nous vous accompagnons dans la conception complète de votre décoration selon votre budget.",
//       image:
//         "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900",
//       icon: "💡",
//     },
//   ];

//   return (
//     <section id="services" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center">

//           <span className="text-[#ff6600] uppercase tracking-widest font-semibold">
//             Nos Services
//           </span>

//           <h2 className="text-5xl font-bold text-[#006633] mt-4">
//             Des prestations adaptées à tous vos besoins
//           </h2>

//           <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
//             Nous réalisons des décorations uniques pour particuliers,
//             entreprises, hôtels, églises et salles de fêtes.
//           </p>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

//           {services.map((service, index) => (

//             <div
//               key={index}
//               className="bg-white rounded-[30px] shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl duration-300"
//             >

//               <img
//                 src={service.image}
//                 alt={service.title}
//                 className="w-full h-64 object-cover"
//               />

//               <div className="p-8">

//                 <div className="text-5xl">
//                   {service.icon}
//                 </div>

//                 <h3 className="text-2xl font-bold text-[#006633] mt-5">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 mt-5 leading-7">
//                   {service.description}
//                 </p>

//                 <button className="mt-8 bg-[#ff6600] text-white px-6 py-3 rounded-full hover:bg-orange-600 duration-300">
//                   En savoir plus
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  FaHome,
  FaBuilding,
  FaGlassCheers,
  FaCouch,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome size={45} />,
    title: "Décoration intérieure",
    description:
      "Nous transformons vos maisons et appartements en espaces modernes et élégants.",
  },
  {
    icon: <FaBuilding size={45} />,
    title: "Décoration extérieure",
    description:
      "Valorisez vos espaces extérieurs avec des décorations adaptées à toutes les occasions.",
  },
  {
    icon: <FaGlassCheers size={45} />,
    title: "Décoration événementielle",
    description:
      "Mariages, anniversaires, conférences, baptêmes et cérémonies de prestige.",
  },
  {
    icon: <FaCouch size={45} />,
    title: "Location d'objets",
    description:
      "Chaises, tables, arches, nappes, fauteuils royaux, fleurs et accessoires.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Nos Services
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5">
            Des prestations adaptées à tous vos besoins
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-8 text-lg leading-8">
            Notre équipe vous accompagne de la conception jusqu'à
            la réalisation de votre projet.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >

              <div className="w-20 h-20 rounded-full bg-[#006633] text-white flex items-center justify-center">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold mt-8 text-[#006633]">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                {service.description}
              </p>

              <button className="mt-8 flex items-center gap-3 text-[#ff6600] font-semibold">

                En savoir plus

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          <div className="text-center">

            <FaStar className="text-[#ff6600] text-4xl mx-auto" />

            <h2 className="text-5xl font-bold text-[#006633] mt-5">
              500+
            </h2>

            <p className="text-gray-600 mt-3">
              Décorations réalisées
            </p>

          </div>

          <div className="text-center">

            <FaStar className="text-[#ff6600] text-4xl mx-auto" />

            <h2 className="text-5xl font-bold text-[#006633] mt-5">
              300+
            </h2>

            <p className="text-gray-600 mt-3">
              Clients satisfaits
            </p>

          </div>

          <div className="text-center">

            <FaStar className="text-[#ff6600] text-4xl mx-auto" />

            <h2 className="text-5xl font-bold text-[#006633] mt-5">
              5+
            </h2>

            <p className="text-gray-600 mt-3">
              Années d'expérience
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}