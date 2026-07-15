import { Link,useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KitchenIcon from '@mui/icons-material/Kitchen';
import HistoryIcon from '@mui/icons-material/History';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LogoutIcon from '@mui/icons-material/Logout';

function Menu(){
  const nav= useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("token");
    nav("/login")
  }

    return(
       <>
        <div className=" bg-blue-1000 text-white  w-60 h-134 shadow-2xl  pt-26">
            <ul className="flex flex-col gap-4 px-3">

                <li className="cursor-pointer hover:bg-blue-600 hover:text-white">
                  <DashboardIcon /> <Link to={"/home"}>Tableau de bord</Link>
                </li>

                <li className="cursor-pointer  hover:bg-blue-600 hover:text-white">
                  <ShoppingCartIcon /> <Link to={"/commande"}>Commande</Link>
                </li>

                <li className="cursor-pointer hover:bg-blue-600 hover:text-white">
                  <KitchenIcon /> <Link to={"/personelle"}>Personelle</Link>
                </li>
                <li className="cursor-pointer hover:bg-blue-600 hover:text-white">
                  <PeopleIcon /> <Link to={"/client"}> Clients</Link>
                </li>
                <li className="cursor-pointer hover:bg-blue-600 hover:text-white">
                  <LocalShippingIcon /> <Link to={"/fournisseur"}> Fournisseur</Link>
                </li>


            </ul>
            <p onClick={handlelogout} className="px-14 mx-1 py-2 mt-63  cursor-pointer hover:bg-red-400 w-59 h-9 bg-blue-400 flex items-center gap-2 rounded">
  <LogoutIcon /> Deconnecter
</p>
        </div>
       </>
    )
};

export default Menu;