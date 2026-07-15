import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import RecentOrders from "../components/RecentOrders";
import Header from "../components/Header";
import Card from "../components/Card";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import GroupIcon from "@mui/icons-material/Group";
import { getTotalClients } from "../Services/Clientservice";
import { gettotalfournisseur } from "../Services/fournisseurservice";
import { gettotalpersonelle } from "../Services/personelleservices";
import {
  getTotalCommande,
  getCA,
  getTopPlat
} from "../services/orderservice";

function Home() {
  const [totalCommandes, setTotalCommandes] = useState(0);
  const [chiffreAffaire, setChiffreAffaire] = useState(0);
  const [topPlat, setTopPlat] = useState("--");
  const [loading, setLoading] = useState(true);
  const [totalclient,settotalclient]=useState(0);
  const [totalfournisseur,setotalfournisseur]=useState(0);
  const [personelle,setpersonelle]=useState(0);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = () => {
    Promise.all([
      getTotalCommande(),
      getCA(),
      getTopPlat(),
      getTotalClients(),
      gettotalfournisseur(),
      gettotalpersonelle()

    ])
      .then(([cmdRes, caRes, platRes,cl,fr,pl]) => {
        setTotalCommandes(cmdRes.data);
        setChiffreAffaire(caRes.data);
        setTopPlat(platRes.data);
        settotalclient(cl.data);
        setotalfournisseur(fr.data);
        setpersonelle(pl.data)

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />

      <div className="flex gap-3">
        <Menu />

        <div>
          <Header tittle={"TABLEAU DE BORD"} />

          {/* LIGNE 1 */}
          <div className="flex mx-2 gap-30">
            <Card title="TOTAL DES CLIENTS" value={totalclient} loading={loading} icon={PeopleIcon} />
            <Card title="TOTAL DES COMMANDES" value={totalCommandes} loading={loading} icon={ShoppingCartIcon} />
            <Card title="TOTAL DES FOURNISSEURS" value={totalfournisseur} loading={loading} icon={LocalShippingIcon} />
          </div>

          {/* LIGNE 2 */}
          <div className="flex mt-4 gap-30 mx-2">
            <Card title="CHIFFRE D'AFFAIRES" value={chiffreAffaire} loading={loading} icon={AttachMoneyIcon} />
            <Card title="PLAT LE PLUS VENDU" value={topPlat} loading={loading} icon={RestaurantIcon} />
            <Card title="TOTAL DES PERSONNELS" value={personelle} loading={loading} icon={GroupIcon} />
          </div>

          <div>
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;