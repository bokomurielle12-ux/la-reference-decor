export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HEADER */}

      <header className="bg-[#006633] text-white px-10 py-6 flex justify-between items-center">

        <div>

          <h1 className="text-3xl font-bold">
            Tableau de bord
          </h1>

          <p className="text-green-100">
            LA RÉFÉRENCE COIFFURE & DÉCOR
          </p>

        </div>

        <button className="bg-[#ff6600] px-6 py-3 rounded-xl">
          Déconnexion
        </button>

      </header>

      <div className="grid lg:grid-cols-5">

        {/* MENU */}

        <aside className="bg-white min-h-screen shadow-lg p-8">

          <h2 className="font-bold text-xl text-[#006633] mb-8">
            Administration
          </h2>

          <nav className="space-y-4">

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              📊 Tableau de bord
            </button>

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              🖼 Réalisations
            </button>

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              🛋 Produits
            </button>

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              📅 Réservations
            </button>

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              💬 Messages
            </button>

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              👥 Clients
            </button>

            <button className="w-full text-left p-4 rounded-xl hover:bg-green-50">
              ⚙ Paramètres
            </button>

          </nav>

        </aside>

        {/* CONTENU */}

        <section className="lg:col-span-4 p-10">

          {/* STATISTIQUES */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-gray-500">
                Produits
              </h3>

              <h2 className="text-5xl font-bold text-[#006633] mt-4">
                48
              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-gray-500">
                Réalisations
              </h3>

              <h2 className="text-5xl font-bold text-[#006633] mt-4">
                132
              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-gray-500">
                Réservations
              </h3>

              <h2 className="text-5xl font-bold text-[#ff6600] mt-4">
                17
              </h2>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h3 className="text-gray-500">
                Messages
              </h3>

              <h2 className="text-5xl font-bold text-[#ff6600] mt-4">
                9
              </h2>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <button className="bg-[#006633] text-white rounded-3xl p-8 text-xl hover:bg-green-800">

              ➕ Ajouter une réalisation

            </button>

            <button className="bg-[#ff6600] text-white rounded-3xl p-8 text-xl hover:bg-orange-600">

              ➕ Ajouter un produit

            </button>

          </div>

          {/* TABLEAU */}

          <div className="bg-white rounded-3xl shadow-lg mt-12 p-8">

            <h2 className="text-2xl font-bold text-[#006633] mb-6">

              Dernières réservations

            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">Client</th>

                  <th className="text-left py-4">Service</th>

                  <th className="text-left py-4">Date</th>

                  <th className="text-left py-4">Statut</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">

                  <td className="py-4">Murielle Boko</td>

                  <td>Décoration mariage</td>

                  <td>15/08/2026</td>

                  <td>

                    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">

                      Confirmée

                    </span>

                  </td>

                </tr>

                <tr className="border-b">

                  <td className="py-4">Jean Dupont</td>

                  <td>Location</td>

                  <td>20/08/2026</td>

                  <td>

                    <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">

                      En attente

                    </span>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </section>

      </div>

    </main>
  );
}