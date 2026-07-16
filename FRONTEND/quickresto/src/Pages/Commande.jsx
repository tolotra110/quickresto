import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import FormulaireCommande from "../components/FormulaireCommande";

import {
  getCommandes,
  deleteCommande,
  getTotalParTable,
  createCommande
} from "../services/orderservice";

export default function Commande() {
  const [commandes, setCommandes] = useState([]);
  const [totauxTable, setTotauxTable] = useState([]);
  const [filterTable, setFilterTable] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  
  useEffect(() => {
    loadCommandes();
    loadTotaux();
  }, []);

  const loadCommandes = () => {
    getCommandes()
      .then((res) => setCommandes(res.data))
      .catch((err) => console.error(err));
  };

  const loadTotaux = () => {
    getTotalParTable()
      .then((res) => setTotauxTable(res.data))
      .catch((err) => console.error(err));
  };


  const handleDelete = (idCommande) => {
    deleteCommande(idCommande)
      .then(() => {
        loadCommandes();
        loadTotaux();
        setCurrentPage(1);
      })
      .catch((err) => console.error(err));
  };

  const handleAddCommande = (newCommande) => {
    const payload = {
      numTab: newCommande.table,
      articles: newCommande.item,
      quantite: newCommande.qty,
      prix: newCommande.prix,
      status: newCommande.status || "Libre"
    };

    createCommande(payload)
      .then(() => {
        loadCommandes();
        loadTotaux();
        setCurrentPage(1);
      })
      .catch((err) => console.error(err));
  };

  
  const filteredCommandes = useMemo(() => {
    if (!filterTable) return commandes;

    return commandes.filter(
      (cmd) => String(cmd.numTab) === String(filterTable)
    );
  }, [commandes, filterTable]);


  const totalMap = useMemo(() => {
    const map = {};

    totauxTable.forEach((t) => {
      if (Array.isArray(t)) {
        map[t[0]] = t[1];
      } else if (t.numTab) {
        map[t.numTab] = t.total;
      } else if (t.table) {
        map[t.table] = t.total;
      }
    });

    return map;
  }, [totauxTable]);

  const getTotalByTable = (numTab) => {
    return totalMap[numTab] || 0;
  };


  const orderCards = useMemo(() => {
    return filteredCommandes.map((cmd) => ({
      id: cmd.idCommande,
      data: {
        title: "Table " + cmd.numTab,
        status: cmd.status,
        items: [
          {
            name: cmd.articles,
            qty: cmd.quantite,
            price: cmd.prix
          }
        ],
        total: getTotalByTable(cmd.numTab)
      }
    }));
  }, [filteredCommandes, totalMap]);

  const totalPages = Math.ceil(orderCards.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedCards = orderCards.slice(startIndex, endIndex);

  return (
    <>
      <Navbar />

      <div className="flex">
        <Menu />

        <div className="flex-1">
          <Header tittle={"COMMANDE"} />

          {/* FORM */}
          <div className="px-4 mt-4">
            <FormulaireCommande
              onAdd={handleAddCommande}
              onFilter={setFilterTable}
            />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-4 p-4">
            {paginatedCards.map((card) => (
              <OrderCard
                key={card.id}
                data={card.data}
                onDelete={() => handleDelete(card.id)}
              />
            ))}
          </div>

        <div className="flex justify-center items-center mt-6 pb-5">
  
  {/* PAGINATION CONTROLS */}
<div className="flex justify-center items-center gap-3 mt-6 text-white pb-6">

  {/* PREV */}
  <button
    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
    className="px-3 py-1 bg-blue-500 rounded"
    disabled={currentPage === 1}
  >
    Prev
  </button>

  {/* PAGE INFO */}
  <span>
    Page {currentPage} / {totalPages}
  </span>

  {/* NEXT */}
  <button
    onClick={() =>
      setCurrentPage((p) =>
        currentPage < totalPages ? p + 1 : p
      )
    }
    className="px-3 py-1 bg-blue-500 rounded"
    disabled={currentPage === totalPages}
  >
    Next
  </button>

</div>
</div>
        </div>
      </div>
    </>
  );
}
