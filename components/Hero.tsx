"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Image de fond */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/hero.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Contenu */}

      <div className="relative z-10 flex h-full items-center">

        <div className="max-w-7xl mx-auto w-full px-6">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="inline-block border border-white/70 rounded-full px-8 py-3 backdrop-blur-sm bg-white/10"
            >
              <span className="text-white font-medium tracking-wide text-lg">
                Décoration • Évènementiel • Location
              </span>
            </motion.div>

            {/* Grand titre */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4 }}
              className="mt-8 text-white font-extrabold leading-tight text-5xl md:text-7xl"
            >
              Nous transformons vos espaces en

              <br />

              <span className="text-[#ff6600]">
                décors inoubliables
              </span>

            </motion.h1>

            {/* Sous titre */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .6 }}
              className="mt-8 text-white/95 text-xl leading-9 max-w-2xl"
            >
              De la décoration intérieure aux plus grandes cérémonies,
              <br />
              LA RÉFÉRENCE met son savoir-faire au service de vos plus beaux moments.
            </motion.p>

            {/* Boutons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .8 }}
              className="flex flex-wrap gap-6 mt-12"
            >

              <a
                href="#gallery"
                className="bg-[#006633] hover:bg-[#00552b] duration-300 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-xl"              >
                Découvrir nos réalisations

                <FaArrowRight />

              </a>

              <a
                href="#contact"
                className="bg-[#ff6600] hover:bg-orange-600 duration-300 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold shadow-xl"
              >
                Demander un devis

                <FaArrowRight />

              </a>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Indicateur de défilement */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-4xl"
      >
        ⌄
      </motion.div>

    </section>
  );
}