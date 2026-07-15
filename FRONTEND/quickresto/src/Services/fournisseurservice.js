import axios from "axios";

const API_URL = "http://localhost:8080/api/fournisseur";


export const createFournisseur = (data) => {
  return axios.post(`${API_URL}/createfournisseur`, null, {
    params: {
      nomFournisseur: data.nomFournisseur,
      quantite: data.quantite,
      unite: data.unite,
      statut: data.statut,
      ingredient: data.ingredient,
      prixUnitaire: data.prixUnitaire,
    },
  });
};



export const getAllFournisseurs = () => {
  return axios.get(`${API_URL}/allfournisseur`);
};
export const gettotalfournisseur=()=>{
   return  axios.get(`${API_URL}/totalfournisseur`);
}

export const deleteFournisseur = (id) => {
  return axios.delete(`${API_URL}/deletefournisseur/${id}`);
};