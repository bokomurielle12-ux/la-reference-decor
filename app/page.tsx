// export default function Home () {
//   return (
//     <main className="min-h-screen bg-white">

//       {/* HEADER */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

//           <div>
//             <h1 className="text-2xl font-bold text-green-700">
//               LA RÉFÉRENCE
//             </h1>
//             <p className="text-sm text-orange-500">
//               Coiffure & Décor
//             </p>
//           </div>

//           <nav className="hidden md:flex gap-8 font-medium">
//             <a href="#accueil">Accueil</a>
//             <a href="#contact">A propos</a>
//             <a href="#services">Services</a>
//              <a href="#services">Réalisations</a>
//             <a href="#catalogue">Catalogue</a>
//             <a href="#contact">Contact</a>
            
//           </nav>

//           <button className="bg-orange-500 text-white px-5 py-3 rounded-full hover:bg-orange-600 transition">
//             Demander un devis
//           </button>

//         </div>
//       </header>

//       {/* HERO */}
//       <section
//         id="accueil"
//         className="pt-40 pb-28 bg-gradient-to-r from-green-700 to-green-600 text-white"
//       >
//         <div className="max-w-7xl mx-auto px-8">

//           <h2 className="text-6xl font-bold leading-tight">
//             Nous Transformons vos 
//             <br />
//             espaces en
//             <span className="text-orange-400"> décors inoubliables.</span>
//           </h2>

//           <p className="mt-8 text-xl max-w-2xl">
//             De la décoration intérieure aux plus grandes cérémonies, LA RÉFÉRENCE met son savoir-faire au service de vos plus beaux moments.
//           </p>

//           <div className="flex gap-5 mt-10">

//             <button className="bg-orange-500 px-7 py-4 rounded-full hover:bg-orange-600">
//               Nos réalisations
//             </button>

//             <button className="border border-white px-7 py-4 rounded-full">
//               Nous contacter
//             </button>

//           </div>

//         </div>
//       </section>
//             {/* À PROPOS */}
//       <section className="py-20 bg-gray-50" id="apropos">
//         <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h2 className="text-4xl font-bold text-green-700 mb-6">
//               À propos de nous
//             </h2>

//             <p className="text-gray-700 leading-8">
//               LA RÉFÉRENCE COIFFURE ET DÉCOR est une entreprise spécialisée
//               dans la décoration intérieure, extérieure et événementielle.
//               Depuis plusieurs années, nous accompagnons particuliers,
//               entreprises, hôtels, églises et salles de fêtes dans la
//               réalisation d'espaces élégants et mémorables.
//             </p>

//             <button className="mt-8 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
//               En savoir plus
//             </button>
//           </div>

//           <div className="bg-green-100 rounded-3xl h-96 flex items-center justify-center">
//             <span className="text-green-700 text-xl font-semibold">
//               Photo de réalisation
//             </span>
//           </div>

//         </div>
//       </section>

//       {/* SERVICES */}
//       <section className="py-24" id="services">

//         <div className="max-w-7xl mx-auto px-8">

//           <h2 className="text-center text-4xl font-bold text-green-700">
//             Nos Services
//           </h2>

//           <p className="text-center mt-4 text-gray-600">
//             Des solutions adaptées à tous vos événements et projets.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8 mt-16">

//             <div className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition">
//               <div className="text-5xl mb-4">🏠</div>
//               <h3 className="text-2xl font-semibold text-green-700">
//                 Décoration intérieure
//               </h3>
//               <p className="mt-4 text-gray-600">
//                 Sublimez vos maisons, bureaux et espaces professionnels.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition">
//               <div className="text-5xl mb-4">🎉</div>
//               <h3 className="text-2xl font-semibold text-green-700">
//                 Décoration événementielle
//               </h3>
//               <p className="mt-4 text-gray-600">
//                 Mariages, anniversaires, conférences, cérémonies et bien plus.
//               </p>
//             </div>

//             <div className="bg-white shadow-lg rounded-3xl p-8 hover:shadow-2xl transition">
//               <div className="text-5xl mb-4">🪑</div>
//               <h3 className="text-2xl font-semibold text-green-700">
//                 Location d'objets
//               </h3>
//               <p className="mt-4 text-gray-600">
//                 Mobilier, accessoires et objets décoratifs disponibles à la location.
//               </p>
//             </div>

//           </div>

//         </div>

//       </section>
//       {/* RÉALISATIONS */}
// <section id="realisations" className="py-24 bg-gray-100">
//   <div className="max-w-7xl mx-auto px-8">

//     <h2 className="text-4xl font-bold text-center text-green-700">
//       Nos Réalisations
//     </h2>

//     <p className="text-center text-gray-600 mt-4 mb-12">
//       Quelques projets réalisés par notre équipe.
//     </p>

//     <div className="grid md:grid-cols-3 gap-8">

//       {[1,2,3,4,5,6].map((item)=>(
//         <div
//           key={item}
//           className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
//         >
//           <div className="h-64 bg-gray-300 flex items-center justify-center">
//             <span className="text-gray-600">
//               Photo {item}
//             </span>
//           </div>

//           <div className="p-6">

//             <h3 className="font-bold text-xl text-green-700">
//               Réalisation {item}
//             </h3>

//             <p className="text-gray-600 mt-3">
//               Décoration moderne réalisée avec élégance.
//             </p>

//           </div>

//         </div>
//       ))}

//     </div>

//   </div>
// </section>
// {/* CATALOGUE */}
// <section id="catalogue" className="py-24">

// <div className="max-w-7xl mx-auto px-8">

// <h2 className="text-4xl font-bold text-center text-green-700">
// Catalogue
// </h2>

// <p className="text-center mt-4 text-gray-600">
// Découvrez quelques objets disponibles.
// </p>

// <div className="grid md:grid-cols-4 gap-8 mt-16">

// {[
// "Chaise",
// "Table",
// "Arche",
// "Rideau",
// "Vase",
// "Canapé",
// "Ballon",
// "Luminaire"
// ].map((produit)=>(

// <div
// key={produit}
// className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
// >

// <div className="h-52 bg-gray-200 flex items-center justify-center">

// Image

// </div>

// <div className="p-5">

// <h3 className="font-bold text-green-700">
// {produit}
// </h3>

// <p className="text-gray-600 mt-2">
// Disponible en location
// </p>

// <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600">

// Voir détails

// </button>

// </div>

// </div>

// ))}

// </div>

// </div>

// </section>
// {/* CONTACT */}

// <section id="contact" className="bg-green-700 text-white py-24">

// <div className="max-w-5xl mx-auto px-8 text-center">

// <h2 className="text-4xl font-bold">

// Contactez-nous

// </h2>

// <p className="mt-6">

// Téléphone : (+229) 001 95 14 88 00

// </p>

// <p>

// WhatsApp : (+229) 01 96 36 87 79

// </p>

// <div className="mt-10 flex justify-center gap-5">

// <a

// href="https://wa.me/2290196368779?text=Bonjour%20je%20souhaite%20obtenir%20un%20devis."

// target="_blank"

// className="bg-orange-500 px-8 py-4 rounded-full hover:bg-orange-600"

// >

// WhatsApp

// </a>

// <button className="border border-white px-8 py-4 rounded-full">

// Demander un devis

// </button>

// </div>

// </div>

// </section>
// <footer className="bg-black text-white py-8">

// <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

// <p>

// © 2026 LA RÉFÉRENCE COIFFURE ET DÉCOR

// </p>

// <p>

// Conçu par Murielle Boko

// </p>

// </div>

// </footer>
// <a

// href="https://wa.me/2290196368779?text=Bonjour%20LA%20RÉFÉRENCE%20COIFFURE%20ET%20DÉCOR"

// target="_blank"

// className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition"

// >

// 💬

// </a>

//     </main>
//   );
// }
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/services";
import Gallery from "@/components/Gallery";
import Catalogue from "@/components/Catalogue";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Services />

        <Gallery />

        <Catalogue />

        <Reservation />

        <Contact />

      </main>

      <Footer />

      <WhatsappButton />

    </>
  );
}