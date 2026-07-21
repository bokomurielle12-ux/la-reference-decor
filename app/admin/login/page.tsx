export default function AdminLogin() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#006633]">
            Admin
          </h1>

          <p className="text-gray-500 mt-3">
            LA RÉFÉRENCE COIFFURE & DÉCOR
          </p>

        </div>

        <form className="mt-10 space-y-6">

          <div>

            <label className="font-semibold">
              Adresse e-mail
            </label>

            <input
              type="email"
              placeholder="admin@email.com"
              className="mt-2 w-full border rounded-xl p-4 focus:border-[#006633] focus:outline-none"
            />

          </div>

          <div>

            <label className="font-semibold">
              Mot de passe
            </label>

            <input
              type="password"
              placeholder="********"
              className="mt-2 w-full border rounded-xl p-4 focus:border-[#006633] focus:outline-none"
            />

          </div>

          <button
            className="w-full bg-[#006633] text-white py-4 rounded-xl hover:bg-green-800 duration-300"
          >
            Se connecter
          </button>

        </form>

      </div>

    </main>
  );
}