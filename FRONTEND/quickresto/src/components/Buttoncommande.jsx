import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link } from "react-router-dom";
export default function Buttoncommande() {
  return (
    <button className="flex items-center  mx-1 gap-2 w-45 rounded-md bg-blue-1000 hover:bg-blue-400 text-white px-1 py-2  shadow-md transition">
      
      <AddCircleOutlineIcon />
      
     <Link to={"/formulairecommande"}> Nouvelle commande</Link>
    </button>
  );
}
