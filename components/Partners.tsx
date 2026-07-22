"use client";

export default function Partners() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-[#ff6600] font-semibold">
            Nos Partenaires
          </span>

          <h2 className="text-5xl font-bold text-[#006633] mt-5">
            Ils nous font confiance
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">

          {[1,2,3,4,5,6].map((item)=>(
            <div
              key={item}
              className="bg-gray-100 rounded-2xl h-32 flex items-center justify-center text-2xl font-bold text-gray-400"
            >
              Logo
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}