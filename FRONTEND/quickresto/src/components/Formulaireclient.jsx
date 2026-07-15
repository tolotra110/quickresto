import React, { useState } from "react";

export default function FormulaireClient({ onAdd }) {
  const [form, setForm] = useState({
    nomClient: "",
    numTab: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nomClient || !form.numTab) return;

    // 👉 envoi propre vers backend
    onAdd({
      nomClient: form.nomClient,
      numTab: Number(form.numTab),
    });

    // reset
    setForm({
      nomClient: "",
      numTab: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-4 text-white"
    >
      {/* NOM CLIENT */}
      <input
        type="text"
        name="nomClient"
        value={form.nomClient}
        onChange={handleChange}
        placeholder="Nom client"
        className="px-3 py-2 rounded bg-blue-800 text-white placeholder-blue-200 outline-none"
      />

      {/* TABLE */}
      <input
        type="number"
        name="numTab"
        value={form.numTab}
        onChange={handleChange}
        placeholder="Table"
        className="px-3 py-2 rounded bg-blue-800 text-white placeholder-blue-200 outline-none w-24"
      />

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-blue-400 px-4 py-2 rounded text-sm"
      >
        Ajouter
      </button>
    </form>
  );
}