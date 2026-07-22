"use client";

export default function GoogleMap() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Localisation
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-4">
            Retrouvez-nous
          </h2>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=Cotonou,Benin&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            className="border-0"
          />

        </div>

      </div>

    </section>
  );
}