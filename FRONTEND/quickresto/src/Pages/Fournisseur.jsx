import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import TableFournisseur from "../components/TableFournisseur";

import {
  getAllFournisseurs,
  createFournisseur,
  deleteFournisseur
} from "../Services/fournisseurService";

export default function Fournisseur() {
  const [fournisseurs, setFournisseurs] = useState([]);

  
  useEffect(() => {
    loadFournisseurs();
  }, []);

  const loadFournisseurs = () => {
    getAllFournisseurs()
      .then((res) => {
        setFournisseurs(res.data);
      })
      .catch((err) => console.error("GET ERROR:", err));
  };


  const handleAdd = (newFournisseur) => {
    const payload = {
      nomFournisseur: newFournisseur.nomFournisseur,
      quantite: newFournisseur.quantite,
      unite: newFournisseur.unite,
      statut: newFournisseur.statut,
      ingredient: newFournisseur.ingredient,
      prixUnitaire: newFournisseur.prixUnitaire,
    };

    createFournisseur(payload)
      .then(() => {
        loadFournisseurs(); // refresh après ajout
      })
      .catch((err) => console.error("CREATE ERROR:", err));
  };

  
  const handleDelete = (id) => {
    deleteFournisseur(id)
      .then(() => {
        loadFournisseurs(); 
      })
      .catch((err) => console.error("DELETE ERROR:", err));
  };

  return (
    <>
      <Navbar />

      <div className="flex">
        <Menu />

        <div className="w-full">

          <Header tittle={"FOURNISSEUR"} />

          <div className="mt-6 px-6">
            <TableFournisseur
              data={fournisseurs}
              onAdd={handleAdd}
              onDelete={handleDelete}
            />
          </div>

        </div>
      </div>
    </>
  );
}
