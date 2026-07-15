import React, { useState } from "react";

export default function TableFournisseur({ data = [], onDelete, onAdd }) {
  const [form, setForm] = useState({
    nomFournisseur: "",
    ingredient: "",
    prixUnitaire: "",
    quantite: "",
    unite: "kg",
    statut: "Disponible",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!onAdd) return;

    const newFournisseur = {
      nomFournisseur: form.nomFournisseur,
      ingredient: form.ingredient,
      prixUnitaire: Number(form.prixUnitaire),
      quantite: Number(form.quantite),
      unite: form.unite,
      statut: form.statut,
    };

    onAdd(newFournisseur);

    setForm({
      nomFournisseur: "",
      ingredient: "",
      prixUnitaire: "",
      quantite: "",
      unite: "kg",
      statut: "Disponible",
    });
  };

  return (
    <div className="p-">

      {/* ✅ ICI FIX IMPORTANT : items-end */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-1 mb-4 items-end text-white"
      >
        <input
          type="text"
          name="nomFournisseur"
          value={form.nomFournisseur}
          onChange={handleChange}
          placeholder="Nom fournisseur"
          className="h-10 px-3 rounded bg-blue-1000 shadow-2xl placeholder-blue-200 outline-none"
        />

        <input
          type="text"
          name="ingredient"
          value={form.ingredient}
          onChange={handleChange}
          placeholder="Ingrédient"
          className="h-10 px-3 rounded bg-blue-1000 shadow-2xl placeholder-blue-200 outline-none"
        />

        <input
          type="number"
          name="prixUnitaire"
          value={form.prixUnitaire}
          onChange={handleChange}
          placeholder="Prix unitaire"
          className="h-10 px-3 rounded bg-blue-1000 shadow-2xl placeholder-blue-200 outline-none"
        />

        <input
          type="number"
          name="quantite"
          value={form.quantite}
          onChange={handleChange}
          placeholder="Quantité"
          className="h-10 px-3 rounded bg-blue-1000 shadow-2xl placeholder-blue-200 outline-none"
        />

        <select
          name="unite"
          value={form.unite}
          onChange={handleChange}
          className="h-10 px-3 rounded bg-blue-800 text-white outline-none"
        >
          <option value="kg">kg</option>
          <option value="L">L</option>
          <option value="piece">piece</option>
        </select>

        <select
          name="statut"
          value={form.statut}
          onChange={handleChange}
          className="h-10 px-3 rounded bg-blue-800 text-white outline-none"
        >
          <option value="Disponible">Disponible</option>
          <option value="Indisponible">Indisponible</option>
        </select>

        {/* ✅ bouton maintenant parfaitement aligné */}
        <button
          type="submit"
          className="h-10 bg-blue-400 hover:bg-green-600 px-4 rounded text-white text-sm"
        >
          Ajouter
        </button>
      </form>

      {/* TABLE inchangée */}
      <div className="bg-blue-1000 shadow-lg rounded-2xl overflow-hidden text-white">

        <div className="bg-blue-1000 px-4 py-3 font-semibold">
          Liste des Fournisseurs
        </div>

        <table className="w-full text-sm text-left">

          <thead className="bg-blue-1000 text-blue-100 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Nom Fournisseur</th>
              <th className="px-4 py-3">Ingrédient</th>
              <th className="px-4 py-3">Prix Unitaire</th>
              <th className="px-4 py-3">Quantité</th>
              <th className="px-4 py-3">Unité</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-blue-200">
                  Aucun fournisseur disponible
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item.idFournisseur}
                  className="border-t border-blue-800 hover:bg-blue-800 transition"
                >
                  <td className="px-4 py-3">{item.idFournisseur}</td>
                  <td className="px-4 py-3">{item.nomFournisseur}</td>
                  <td className="px-4 py-3">{item.ingredient}</td>
                  <td className="px-4 py-3">{item.prixUnitaire} Ar</td>
                  <td className="px-4 py-3">{item.quantite}</td>
                  <td className="px-4 py-3">{item.unite}</td>
                  <td className="px-4 py-3">{item.statut}</td>

                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        onDelete && onDelete(item.idFournisseur)
                      }
                      className="bg-blue-400 hover:bg-red-600 px-3 py-1 rounded text-xs"
                    >
                      Supprimer
                    </button>
                  </td>

                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}