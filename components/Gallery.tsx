// export default function Gallery() {
//   const images = [
//     "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
//     "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200",
//     "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
//     "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200",
//     "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200",
//     "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200",
//     "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200",
//     "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1200",
//     "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200",
//     "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
//     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200",
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
//   ];

//   return (
//     <section
//       id="gallery"
//       className="py-24 bg-white"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center">

//           <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
//             Nos Réalisations
//           </span>

//           <h2 className="text-5xl font-bold text-[#006633] mt-4">
//             Découvrez notre savoir-faire
//           </h2>

//           <p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto">
//             Chaque décoration est pensée avec créativité,
//             élégance et professionnalisme afin de rendre
//             chaque événement unique.
//           </p>

//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">

//           {images.map((image, index) => (

//             <div
//               key={index}
//               className="group overflow-hidden rounded-[30px] shadow-xl cursor-pointer"
//             >

//               <img
//                 src={image}
//                 alt={`Décoration ${index + 1}`}
//                 className="w-full h-80 object-cover group-hover:scale-110 duration-500"
//               />

//             </div>

//           ))}

//         </div>

//         <div className="text-center mt-16">

//           <button className="bg-[#006633] text-white px-10 py-4 rounded-full hover:bg-green-800 duration-300">

//             Voir toutes nos réalisations

//           </button>

//         </div>

//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Nos Réalisations
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5">
            Quelques-unes de nos créations
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            Découvrez nos réalisations en décoration intérieure,
            extérieure et événementielle.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((image, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl shadow-xl"
            >

              <img
                src={image}
                alt={`Décoration ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-110 duration-500"
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}