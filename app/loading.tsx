export default function Loading() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">

      <div className="text-center">

        <div className="w-24 h-24 border-[8px] border-[#006633] border-t-[#ff6600] rounded-full animate-spin mx-auto"></div>

        <h2 className="mt-8 text-3xl font-bold text-[#006633]">
          Chargement...
        </h2>

      </div>

    </main>
  );
}