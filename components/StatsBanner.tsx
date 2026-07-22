"use client";

export default function StatsBanner() {
  return (
    <section className="bg-[#006633] py-20">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

        <div>

          <h2 className="text-5xl font-bold text-white">
            500+
          </h2>

          <p className="text-gray-200 mt-3">
            Clients satisfaits
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-white">
            700+
          </h2>

          <p className="text-gray-200 mt-3">
            Évènements
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-white">
            120+
          </h2>

          <p className="text-gray-200 mt-3">
            Locations
          </p>

        </div>

        <div>

          <h2 className="text-5xl font-bold text-white">
            5★
          </h2>

          <p className="text-gray-200 mt-3">
            Avis Clients
          </p>

        </div>

      </div>

    </section>
  );
}