import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function FormulaireCommande({ onAdd, onFilter }) {
  const [form, setForm] = useState({
    table: "",
    item: "",
    qty: 1,
    prix: 0,
    status: "En attente",
  });

  const [filterTable, setFilterTable] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterTable(value);
    onFilter && onFilter(value);
  };

  // ➕ / − quantité
  const increaseQty = () => {
    setForm({ ...form, qty: Number(form.qty) + 1 });
  };

  const decreaseQty = () => {
    setForm({ ...form, qty: Math.max(1, Number(form.qty) - 1) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd &&
      onAdd({
        table: form.table,
        item: form.item,
        qty: Number(form.qty),
        prix: Number(form.prix),
        status: form.status,
      });

    setForm({
      table: "",
      item: "",
      qty: 1,
      prix: 0,
      status: "En attente",
    });
  };

  return (
    <div className="flex flex-wrap items-end gap-4 mb-4">

      {/* 🔍 FILTRE */}
      <div className="flex items-center gap-2 bg-blue-800 px-2 py-1.5 rounded text-white">
        <FilterListIcon className="text-blue-300 text-sm" />

        <input
          type="number"
          placeholder="Table"
          value={filterTable}
          onChange={handleFilterChange}
          className="bg-transparent outline-none w-16 text-sm text-white"
        />
      </div>

      {/* FORMULAIRE */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-end gap-3 text-white"
      >

        {/* TABLE */}
        <div className="flex flex-col">
          <label className="text-xs text-blue-200 mb-1">Table</label>
          <input
            type="number"
            name="table"
            value={form.table}
            onChange={handleChange}
            className="px-2 py-1 rounded bg-blue-800 w-16 text-sm outline-none"
          />
        </div>

        {/* ARTICLE */}
        <div className="flex flex-col">
          <label className="text-xs text-blue-200 mb-1">Article</label>
          <input
            type="text"
            name="item"
            value={form.item}
            onChange={handleChange}
            placeholder="Burger, Pizza..."
            className="px-2 py-1 rounded bg-blue-800 w-32 text-sm outline-none"
          />
        </div>

        {/* QUANTITÉ */}
        <div className="flex flex-col">
          <label className="text-xs text-blue-200 mb-1">Qty</label>

          <div className="flex items-center bg-blue-800 rounded w-20 text-sm overflow-hidden">

            <button
              type="button"
              onClick={decreaseQty}
              className="px-2 py-1 hover:bg-blue-700"
            >
              −
            </button>

            <input
              type="number"
              name="qty"
              value={form.qty}
              min={1}
              onChange={handleChange}
              className="w-full text-center bg-transparent outline-none"
            />

            <button
              type="button"
              onClick={increaseQty}
              className="px-2 py-1 hover:bg-blue-700"
            >
              +
            </button>

          </div>
        </div>

        {/* PRIX */}
        <div className="flex flex-col">
          <label className="text-xs text-blue-200 mb-1">Prix</label>
          <input
            type="number"
            name="prix"
            value={form.prix}
            onChange={handleChange}
            className="px-2 py-1 rounded bg-blue-800 w-20 text-sm outline-none"
          />
        </div>

        {/* STATUT */}
        <div className="flex flex-col">
          <label className="text-xs text-blue-200 mb-1">Statut</label>
          <select
  name="status"
  value={form.status}
  onChange={handleChange}
  className="px-2 py-1 rounded bg-blue-800 w-24 text-sm outline-none"
>
  <option value="Libre">Libre</option>
  <option value="Occupé">Occupé</option>
</select>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="bg-blue-400 px-3 py-1.5 rounded text-sm"
        >
          Ajouter
        </button>

      </form>
    </div>
  );
}