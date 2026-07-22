"use client";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-red-600">
          Oups !
        </h1>

        <p className="mt-6 text-gray-600">
          Une erreur est survenue.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 bg-[#006633] text-white px-8 py-4 rounded-full"
        >
          Réessayer
        </button>

      </div>

    </main>
  );
}