import axios from "axios";

const API_URL = "http://localhost:8080/api/commande";


export const getCommandes = () => {
  return axios.get(`${API_URL}/allcommande`);
};

// 🔹 DELETE commande
export const deleteCommande = (id) => {
  return axios.delete(`${API_URL}/deletecommande/${id}`);
};

// 🔹 CREATE commande
export const createCommande = (data) => {
  return axios.post(`${API_URL}/createcommande`, null, {
    params: {
      articles: data.articles,
      status: data.status,
      quantite: data.quantite,
      prix: data.prix,
      numTab: data.numTab
    }
  });
};

// 🔹 Dashboard
export const getCA = () => {
  return axios.get(`${API_URL}/dashboard/ca`);
};

export const getTotalCommande = () => {
  return axios.get(`${API_URL}/dashboard/totalcommande`);
};

export const getTopPlat = () => {
  return axios.get(`${API_URL}/top-plat`);
};
export const getTotalParTable = () => {
  return axios.get(`${API_URL}/dashboard/total-par-table`);
};