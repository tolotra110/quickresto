import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-blue-900 text-[#e0e3e5] font-sans">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-blue-950/70 backdrop-blur-md border-b border-blue-800">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          {/* LOGO */}
          <div className="text-3xl flex font-bold text-white">
            <p className="text-blue-600">Q</p>
            uick
            <span className="text-blue-600 ml-1">R</span>
            esto
          </div>

          {/* MENU + SIGN IN */}
          <div className="flex items-center gap-8 text-sm text-gray-200">

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

            {/* BOUTON SIGN IN */}
            <Link
              to="/register"
              className="bg-white text-blue-900 px-5 py-2 rounded-xl font-semibold hover:bg-blue-100 transition hover:scale-105"
            >
              Sign In
            </Link>

          </div>

        </nav>
      </header>

      {/* HERO */}
      <section className="relative py-28 text-center">

        {/* BACKGROUND BLUR */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 blur-3xl rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500 blur-3xl rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Gestion de restaurant <br />
            <span className="text-white">
              simple & efficace
            </span>
          </h1>

          <p className="mt-6 text-blue-100 text-lg">
            Une solution moderne pour gérer vos commandes,
            vos tables et votre personnel en temps réel.
          </p>

          {/* HERO BUTTONS */}
          <div className="mt-8 flex justify-center gap-4">

            <Link
              to="/login"
              className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Commencer
            </Link>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-900 transition">
              Explorer
            </button>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-center text-3xl font-bold mb-12 text-white">
          Fonctionnalités
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="bg-blue-800/40 border border-blue-700 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-white font-bold text-xl">
              📦 Commandes
            </h3>

            <p className="text-blue-100 text-sm mt-2">
              Gestion rapide et en temps réel des commandes.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-blue-800/40 border border-blue-700 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-white font-bold text-xl">
              🪑 Tables
            </h3>

            <p className="text-blue-100 text-sm mt-2">
              Visualisation des tables occupées et libres.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-blue-800/40 border border-blue-700 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-white font-bold text-xl">
              👨‍🍳 Personnel
            </h3>

            <p className="text-blue-100 text-sm mt-2">
              Organisation des équipes et planning.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-blue-800/40 border border-blue-700 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-white font-bold text-xl">
              📊 Statistiques
            </h3>

            <p className="text-blue-100 text-sm mt-2">
              Analyse des performances et ventes.
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