export default function VisiteurDashboard() {
  return (
    <main className="min-h-screen bg-gray-100">

      <header className="bg-[#006633] text-white px-10 py-6 flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Mon espace
          </h1>

          <p>
            Bienvenue sur votre espace client.
          </p>

        </div>

        <button className="bg-[#ff6600] px-6 py-3 rounded-xl">
          Déconnexion
        </button>

      </header>

      <div className="max-w-7xl mx-auto p-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-gray-500">
              Réservations
            </h3>

            <h2 className="text-5xl font-bold text-[#006633] mt-4">
              2
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-gray-500">
              Messages
            </h3>

            <h2 className="text-5xl font-bold text-[#ff6600] mt-4">
              4
            </h2>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h3 className="text-gray-500">
              Profil
            </h3>

            <h2 className="text-5xl">
              👤
            </h2>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold text-[#006633] mb-6">
            Mes réservations
          </h2>

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="text-left py-4">Service</th>

                <th className="text-left py-4">Date</th>

                <th className="text-left py-4">Statut</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">
                  Décoration Mariage
                </td>

                <td>
                  15/08/2026
                </td>

                <td>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">

                    Confirmée

                  </span>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}