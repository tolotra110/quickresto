import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import ClientCard from "../components/Clientcard";
import FormulaireClient from "../components/Formulaireclient";

import {
  getAllClients,
  createClient,
  deleteClient,
} from "../services/clientservice";

export default function Client() {
  const [clients, setClients] = useState([]);

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // LOAD CLIENTS
  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = () => {
    getAllClients()
      .then((res) => setClients(res.data))
      .catch((err) => console.error(err));
  };

  // ADD CLIENT
  const handleAddClient = (client) => {
    console.log("TYPE:", typeof client);
    console.log("DATA:", JSON.stringify(client));

    createClient(client)
      .then(() => {
        loadClients();
        setCurrentPage(1); // retour page 1 après ajout
      })
      .catch((err) => {
        console.log("STATUS:", err.response?.status);
        console.log("DATA:", err.response?.data);
      });
  };

  // DELETE CLIENT
  const handleDeleteClient = (id) => {
    deleteClient(id)
      .then(() => loadClients())
      .catch((err) => console.error(err));
  };

  // PAGINATION LOGIC
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentClients = clients.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <Navbar />

      <div className="flex">
        <Menu />

        <div className="w-full">
          <Header tittle={"CLIENT"} />

          {/* FORM */}
          <div className="px-6 mt-4">
            <FormulaireClient onAdd={handleAddClient} />
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {clients.length === 0 ? (
              <p className="text-gray-400 px-6">Aucun client</p>
            ) : (
              currentClients.map((c) => (
                <ClientCard
                  key={c.idClient || c.id_client}
                  id_client={c.idClient || c.id_client}
                  num_tab={c.numTab || c.num_tab}
                  nom_client={c.nomClient || c.nom_client}
                  onDelete={() =>
                    handleDeleteClient(c.idClient || c.id_client)
                  }
                />
              ))
            )}
          </div>

          {/* PAGINATION CONTROLS */}
          <div className="flex justify-center items-center gap-3 mt-6 text-white pb-6">
            
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="px-3 py-1 bg-blue-500 rounded"
            >
              Prev
            </button>

            <span>
              Page {currentPage} / {Math.ceil(clients.length / itemsPerPage)}
            </span>

            <button
              onClick={() =>
                setCurrentPage((p) =>
                  indexOfLast < clients.length ? p + 1 : p
                )
              }
              className="px-3 py-1 bg-blue-500 rounded"
            >
              Next
            </button>

          </div>

        </div>
      </div>
    </>
  );
}