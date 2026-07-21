// export default function Reservation() {
//   return (
//     <section
//       id="reservation"
//       className="py-24 bg-white"
//     >
//       <div className="max-w-6xl mx-auto px-6">

//         <div className="text-center">

//           <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
//             Réservation
//           </span>

//           <h2 className="text-5xl font-bold text-[#006633] mt-4">
//             Réservez votre décoration
//           </h2>

//           <p className="text-gray-600 text-lg mt-6">
//             Remplissez le formulaire ci-dessous.
//             Nous vous contacterons rapidement.
//           </p>

//         </div>

//         <form className="bg-gray-50 rounded-[35px] shadow-xl mt-16 p-10">

//           <div className="grid md:grid-cols-2 gap-8">

//             <div>

//               <label className="font-semibold">
//                 Nom complet
//               </label>

//               <input
//                 type="text"
//                 placeholder="Votre nom"
//                 className="mt-3 w-full border rounded-xl p-4 focus:outline-none focus:border-[#006633]"
//               />

//             </div>

//             <div>

//               <label className="font-semibold">
//                 Téléphone
//               </label>

//               <input
//                 type="tel"
//                 placeholder="+229"
//                 className="mt-3 w-full border rounded-xl p-4 focus:outline-none focus:border-[#006633]"
//               />

//             </div>

//             <div>

//               <label className="font-semibold">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 placeholder="email@gmail.com"
//                 className="mt-3 w-full border rounded-xl p-4 focus:outline-none focus:border-[#006633]"
//               />

//             </div>

//             <div>

//               <label className="font-semibold">
//                 Date de l'évènement
//               </label>

//               <input
//                 type="date"
//                 className="mt-3 w-full border rounded-xl p-4 focus:outline-none focus:border-[#006633]"
//               />

//             </div>

//             <div>

//               <label className="font-semibold">
//                 Type de prestation
//               </label>

//               <select className="mt-3 w-full border rounded-xl p-4">

//                 <option>Décoration intérieure</option>

//                 <option>Décoration extérieure</option>

//                 <option>Décoration événementielle</option>

//                 <option>Aménagement de bureaux</option>

//                 <option>Location d'objets</option>

//               </select>

//             </div>

//             <div>

//               <label className="font-semibold">
//                 Lieu
//               </label>

//               <input
//                 type="text"
//                 placeholder="Ville"
//                 className="mt-3 w-full border rounded-xl p-4"
//               />

//             </div>

//           </div>

//           <div className="mt-8">

//             <label className="font-semibold">
//               Décrivez votre besoin
//             </label>

//             <textarea
//               rows={6}
//               placeholder="Votre message..."
//               className="mt-3 w-full border rounded-xl p-4"
//             ></textarea>

//           </div>

//           <button
//             className="mt-10 bg-[#006633] hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-semibold"
//           >
//             Envoyer la réservation
//           </button>

//         </form>

//       </div>
//     </section>
//   );
// }
"use client";

import { FaCalendarAlt } from "react-icons/fa";

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Réservation
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5">
            Réservez votre prestation
          </h2>

          <p className="text-lg text-gray-600 mt-6">
            Remplissez ce formulaire et notre équipe vous contactera rapidement.
          </p>

        </div>

        <form className="bg-gray-50 rounded-3xl shadow-xl p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Nom complet"
              className="border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Téléphone"
              className="border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Adresse e-mail"
              className="border rounded-xl p-4"
            />

            <input
              type="text"
              placeholder="Lieu de l'évènement"
              className="border rounded-xl p-4"
            />

            <select className="border rounded-xl p-4">

              <option>Choisir un service</option>

              <option>Décoration Mariage</option>

              <option>Décoration Anniversaire</option>

              <option>Décoration Entreprise</option>

              <option>Location de matériel</option>

              <option>Décoration Intérieure</option>

              <option>Décoration Extérieure</option>

            </select>

            <input
              type="number"
              placeholder="Nombre d'invités"
              className="border rounded-xl p-4"
            />

            <input
              type="date"
              className="border rounded-xl p-4"
            />

            <input
              type="time"
              className="border rounded-xl p-4"
            />

          </div>

          <textarea
            rows={6}
            placeholder="Décrivez votre projet..."
            className="border rounded-xl p-4 w-full mt-6"
          />

          <button
            className="mt-8 bg-[#006633] hover:bg-green-800 text-white px-10 py-4 rounded-full flex items-center gap-3 duration-300"
          >
            <FaCalendarAlt />

            Réserver maintenant

          </button>

        </form>

      </div>
    </section>
  );
}