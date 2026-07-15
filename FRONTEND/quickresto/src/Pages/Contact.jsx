import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#101415] text-[#e0e3e5] font-sans">

      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-b from-[#0b0f10] to-[#101415]">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Contactez-nous
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Une question, une suggestion ou un besoin d’assistance ? Notre équipe est là pour vous aider.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div className="bg-[#1d2022] border border-gray-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-400 mb-6">📩 Envoyer un message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg bg-[#101415] border border-gray-700 outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Votre email"
              className="w-full p-3 rounded-lg bg-[#101415] border border-gray-700 outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Votre message"
              className="w-full p-3 rounded-lg bg-[#101415] border border-gray-700 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* INFO */}
        <div className="space-y-6">

          <div className="bg-[#1d2022] border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold">📍 Adresse</h3>
            <p className="text-gray-400 mt-2">
              Antananarivo, Madagascar
            </p>
          </div>

          <div className="bg-[#1d2022] border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold">📞 Téléphone</h3>
            <p className="text-gray-400 mt-2">+261 34 00 000 00</p>
          </div>

          <div className="bg-[#1d2022] border border-gray-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold">📧 Email</h3>
            <p className="text-gray-400 mt-2">support@quickresto.com</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-900 to-[#101415]">
        <h2 className="text-3xl font-bold">Besoin d’une réponse rapide ?</h2>
        <p className="text-gray-300 mt-3">Notre équipe répond généralement en moins de 24h</p>
      </section>

    </div>
  );
}
