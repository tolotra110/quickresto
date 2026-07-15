import React, { useState } from "react";

export default function FormulairePersonelle({ onAdd }) {
  const [form, setForm] = useState({
    nom_personelle: "",
    fonction: "",
    heure_debut: "",
    heure_fin: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nom_personelle ||
      !form.fonction ||
      !form.heure_debut ||
      !form.heure_fin
    )
      return;

    const newPerson = {
      id_personelle: Date.now(),
      ...form,
    };

    onAdd(newPerson);

    setForm({
      nom_personelle: "",
      fonction: "",
      heure_debut: "",
      heure_fin: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-wrap items-end gap-2 mb-4 text-white"
    >
      {/* NOM */}
      <input
        type="text"
        name="nom_personelle"
        value={form.nom_personelle}
        onChange={handleChange}
        placeholder="Nom personnel"
        className="px-3 py-2 rounded bg-blue-800 text-white placeholder-blue-200 outline-none"
      />

      {/* FONCTION */}
      <input
        type="text"
        name="fonction"
        value={form.fonction}
        onChange={handleChange}
        placeholder="Fonction"
        className="px-3 py-2 rounded bg-blue-800 text-white placeholder-blue-200 outline-none w-40"
      />

      {/* HEURE DEBUT */}
      <div className="flex flex-col">
        <label className="text-xs text-blue-200 mb-1">Début</label>
        <input
          type="time"
          name="heure_debut"
          value={form.heure_debut}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-blue-800 text-white outline-none"
        />
      </div>

      {/* HEURE FIN */}
      <div className="flex flex-col">
        <label className="text-xs text-blue-200 mb-1">Fin</label>
        <input
          type="time"
          name="heure_fin"
          value={form.heure_fin}
          onChange={handleChange}
          className="px-3 py-2 rounded bg-blue-800 text-white outline-none"
        />
      </div>

      {/* BUTTON */}
      <button
        type="submit"
        className="bg-blue-400  px-4 py-2 rounded text-sm"
      >
        Ajouter
      </button>
    </form>
  );
}