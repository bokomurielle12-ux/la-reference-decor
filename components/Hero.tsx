
export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-24 bg-gradient-to-r from-[#006633] to-[#00994d] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* Texte */}

        <div>

          <span className="bg-orange-500 px-4 py-2 rounded-full text-sm">
            Depuis plusieurs années à votre service
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight">

            Donnez vie à vos

            <span className="text-orange-400">

              {" "}évènements{" "}

            </span>

            avec élégance.

          </h1>

          <p className="mt-8 text-lg text-gray-100 leading-8">

            Décoration intérieure, extérieure,
            événementielle, location d'objets de décoration
            et aménagement de bureaux.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#catalogue"
              className="bg-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 duration-300"
            >
              Voir le catalogue
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#006633] duration-300"
            >
              Nous contacter
            </a>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-4xl font-bold text-orange-400">500+</h2>
              <p>Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-400">300+</h2>
              <p>Décorations</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-orange-400">10+</h2>
              <p>Années</p>
            </div>

          </div>

        </div>

        {/* Image */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900"
            alt="Décoration"
            className="rounded-[40px] shadow-2xl w-full h-[600px] object-cover"
          />

        </div>

      </div>
    </section>
  );
}