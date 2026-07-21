export default function VisiteurLogin() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#006633] to-[#00994d] flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#006633]">
            Connexion
          </h1>

          <p className="mt-3 text-gray-500">
            Connectez-vous à votre espace client.
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>

            <label className="font-semibold">
              Adresse e-mail
            </label>

            <input
              type="email"
              placeholder="email@gmail.com"
              className="w-full mt-2 border rounded-xl p-4 focus:outline-none focus:border-[#006633]"
            />

          </div>

          <div>

            <label className="font-semibold">
              Mot de passe
            </label>

            <input
              type="password"
              placeholder="********"
              className="w-full mt-2 border rounded-xl p-4 focus:outline-none focus:border-[#006633]"
            />

          </div>

          <button
            className="w-full bg-[#006633] text-white py-4 rounded-xl hover:bg-green-800 duration-300"
          >
            Se connecter
          </button>

        </form>

        <div className="text-center mt-8">

          <a
            href="/visiteur/register"
            className="text-[#ff6600] font-semibold"
          >
            Créer un compte
          </a>

        </div>

      </div>

    </main>
  );
}