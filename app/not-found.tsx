import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-[#006633]">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page introuvable
        </h2>

        <p className="text-gray-600 mt-6">
          La page demandée n'existe pas.
        </p>

        <Link
          href="/"
          className="inline-block mt-10 bg-[#006633] text-white px-8 py-4 rounded-full hover:bg-green-800 duration-300"
        >
          Retour à l'accueil
        </Link>

      </div>

    </main>
  );
}