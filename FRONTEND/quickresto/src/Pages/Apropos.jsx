import React from "react";
import { Link } from "react-router-dom";

export default function Apropos() {
  return (
    <div className="min-h-screen bg-blue-900 text-[#e0e3e5] font-sans">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-blue-950/70 backdrop-blur-md border-b border-blue-800">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <div className="text-3xl flex font-bold text-white">
            <p className="text-blue-600">Q</p>
            uick <span className="text-blue-600">R</span>esto
          </div>

          {/* MENU */}
          <div className="flex gap-8 text-sm text-gray-200">

            <Link
              to="/"
              className="hover:text-white transition hover:scale-105"
            >
              Accueil
            </Link>

            <Link
              to="/apropos"
              className="hover:text-white transition hover:scale-105"
            >
              À propos
            </Link>

          </div>

        </nav>
      </header>

      {/* HERO */}
      <section className="relative py-28 text-center overflow-hidden">

        {/* BACKGROUND EFFECT */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            À propos de <br />
            <span className="text-blue-300">Quick Resto</span>
          </h1>

          <p className="mt-6 text-blue-100 text-lg">
            Quick Resto est une plateforme moderne conçue
            pour simplifier la gestion des restaurants et
            améliorer l’expérience des clients.
          </p>

        </div>

      </section>

      {/* SECTION PRESENTATION */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXTE */}
          <div>

            <h2 className="text-3xl font-bold text-white mb-6">
              Notre Mission
            </h2>

            <p className="text-blue-100 leading-8">
              Nous aidons les restaurants à gérer facilement
              leurs commandes, leurs employés et leurs tables
              grâce à une interface moderne et intuitive.
            </p>

            <p className="text-blue-100 leading-8 mt-4">
              Notre objectif est de rendre la gestion plus
              rapide, plus efficace et plus agréable pour
              tous les professionnels de la restauration.
            </p>

          </div>

          {/* IMAGE / CARD */}
          <div className="bg-blue-800/40 border border-blue-700 rounded-3xl p-10 backdrop-blur-md shadow-2xl">

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-blue-900/50 p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-white">24h</h3>
                <p className="text-blue-100 mt-2 text-sm">
                  Support disponible
                </p>
              </div>

              <div className="bg-blue-900/50 p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-white">100+</h3>
                <p className="text-blue-100 mt-2 text-sm">
                  Restaurants connectés
                </p>
              </div>

              <div className="bg-blue-900/50 p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-white">99%</h3>
                <p className="text-blue-100 mt-2 text-sm">
                  Satisfaction client
                </p>
              </div>

              <div className="bg-blue-900/50 p-6 rounded-2xl text-center">
                <h3 className="text-4xl font-bold text-white">2026</h3>
                <p className="text-blue-100 mt-2 text-sm">
                  Création du projet
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VALEURS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-center text-3xl font-bold text-white mb-12">
          Nos Valeurs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-blue-800/40 border border-blue-700 p-8 rounded-2xl hover:scale-105 transition">

            <h3 className="text-white text-xl font-bold mb-4">
              🚀 Innovation
            </h3>

            <p className="text-blue-100 text-sm">
              Nous utilisons des technologies modernes pour
              améliorer l’expérience utilisateur.
            </p>

          </div>

          <div className="bg-blue-800/40 border border-blue-700 p-8 rounded-2xl hover:scale-105 transition">

            <h3 className="text-white text-xl font-bold mb-4">
              🤝 Collaboration
            </h3>

            <p className="text-blue-100 text-sm">
              Une solution pensée pour aider toute l’équipe
              du restaurant à mieux travailler ensemble.
            </p>

          </div>

          <div className="bg-blue-800/40 border border-blue-700 p-8 rounded-2xl hover:scale-105 transition">

            <h3 className="text-white text-xl font-bold mb-4">
              ⚡ Rapidité
            </h3>

            <p className="text-blue-100 text-sm">
              Une gestion simple et rapide pour gagner du temps
              chaque jour.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-blue-100 text-sm border-t border-blue-800">
        © 2026 Quick Resto - Tous droits réservés
      </footer>

    </div>
  );
}