import React from "react";

export default function TotalTableModal({ open, onClose, table, total }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white w-80 p-6 rounded-2xl shadow-xl relative">
        
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl"
        >
          ×
        </button>
<div className="flex gap-2">
  
        <h2 className="text-lg font-bold mb-4">
          Total de la {table}:
        </h2>

        <p className="text-center text-2xl font-bold text-green-600">
          {total} Ar
        </p>
</div>

      </div>
    </div>
  );
}