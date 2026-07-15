import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const PersonnelleCard = ({
  id_personelle,
  nom_personelle,
  fonction,
  heure_debut,
  heure_fin,
  onDelete, // ✅ AJOUT IMPORTANT
}) => {
  const [open, setOpen] = useState(false);
  const [createdAt] = useState(() => new Date());

  return (
    <div className="bg-blue-1000 rounded-2xl shadow-2xl mx-2 p-4 w-64 relative">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">

        <h2 className="font-semibold text-white">
          Personnel #{id_personelle}
        </h2>

        <div className="flex items-center gap-2">

          {/* HEURE */}
          <span className="text-xs text-gray-300">
            {createdAt.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>

          {/* MENU */}
          <div className="relative">
            <button onClick={() => setOpen(!open)}>
              <MoreVertIcon className="text-gray-300 cursor-pointer" />
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-xl shadow-2xl bg-blue-200 z-10 overflow-hidden">

                {/* VALIDER */}
                <button className="flex items-center gap-2 w-full px-4 py-2 text-sm text-green-600 hover:bg-green-50 transition">
                  <CheckCircleOutlineIcon style={{ fontSize: 18 }} />
                  Valider
                </button>

                <div className="h-px bg-gray-200 mx-2"></div>

                {/* SUPPRIMER ✔ FIX */}
                <button
                  onClick={() => {
                    if (onDelete) {
                      onDelete(id_personelle); // 🔥 appel backend
                    }
                    setOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  <DeleteOutlineIcon style={{ fontSize: 18 }} />
                  Supprimer
                </button>

              </div>
            )}
          </div>

        </div>
      </div>

      {/* FONCTION */}
      <div className="mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-blue-800 text-blue-100 font-medium">
          {fonction}
        </span>
      </div>

      {/* INFOS */}
      <div className="text-sm text-white space-y-1">

        <div className="flex justify-between">
          <span>Nom :</span>
          <span className="font-medium">{nom_personelle}</span>
        </div>

        <div className="flex justify-between">
          <span>Début :</span>
          <span className="font-medium text-green-300">
            {heure_debut || "--:--"}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Fin :</span>
          <span className="font-medium text-red-300">
            {heure_fin || "--:--"}
          </span>
        </div>

      </div>

    </div>
  );
};

export default PersonnelleCard;