import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import PersonnelleCard from "../components/Personnellecard";
import FormulairePersonelle from "../components/FormulairePersonelle";

import {
  getAllPersonnels,
  createPersonnel,
  deletePersonnel
} from "../Services/personelleservices";

export default function Personelle() {
  const [personnels, setPersonnels] = useState([]);

  // 🔄 LOAD DATA
  useEffect(() => {
    loadPersonnels();
  }, []);

  const loadPersonnels = () => {
    getAllPersonnels()
      .then((res) => {
        setPersonnels(res.data);
      })
      .catch((err) => console.error("GET ERROR:", err));
  };

  // ➕ ADD PERSONNEL
  const handleAdd = (newPerson) => {
    const payload = {
      nomPersonelle: newPerson.nom_personelle,
      fonction: newPerson.fonction,
      heureDebut: newPerson.heure_debut,
      heureFin: newPerson.heure_fin,
    };

    createPersonnel(payload)
      .then(() => {
        loadPersonnels(); // refresh
      })
      .catch((err) => console.error("CREATE ERROR:", err));
  };

  // ❌ DELETE PERSONNEL
  const handleDelete = (id) => {
    console.log("DELETE ID =", id);

    deletePersonnel(id)
      .then(() => {
        loadPersonnels(); // refresh
      })
      .catch((err) => console.error("DELETE ERROR:", err));
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <Menu />

        <div className="flex-1">
          <Header tittle={"PERSONNELLE"} />

          {/* FORMULAIRE */}
          <div className="px-4 pt-4">
            <FormulairePersonelle onAdd={handleAdd} />
          </div>

          {/* LISTE */}
          <div className="p-4 flex flex-wrap gap-4">
            {personnels.length === 0 ? (
              <p className="text-gray-400">Aucun personnel trouvé...</p>
            ) : (
              personnels.map((p) => (
                <PersonnelleCard
                  key={p.idPersonelle}
                  id_personelle={p.idPersonelle}
                  nom_personelle={p.nomPersonelle}
                  fonction={p.fonction}
                  heure_debut={p.heureDebut}
                  heure_fin={p.heureFin}
                  onDelete={() => handleDelete(p.idPersonelle)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}