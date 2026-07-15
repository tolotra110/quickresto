import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const ClientCard = ({ id_client, num_tab, nom_client, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-blue-1000 rounded-2xl mt-3 shadow-2xl p-4 w-64 relative">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white font-semibold">
          Client #{id_client}
        </h2>

        <div className="relative">
          <button onClick={() => setOpen(!open)}>
            <MoreVertIcon className="text-gray-300" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-blue-200 rounded-xl shadow">

              <button
                onClick={() => {
                  onDelete && onDelete();
                  setOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <DeleteOutlineIcon style={{ fontSize: 18 }} />
                Supprimer
              </button>

            </div>
          )}
        </div>
      </div>

      {/* INFO */}
      <div className="text-white text-sm">
        <p>Nom : {nom_client}</p>
        <p>Table : {num_tab}</p>
      </div>
    </div>
  );
};

export default ClientCard;