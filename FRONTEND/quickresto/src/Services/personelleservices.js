import axios from "axios";

const API_URL = "http://localhost:8080/api/personnalite";

export const createPersonnel = (data) => {
  return axios.post(`${API_URL}/createpersonellle`, null, {
    params: {
      nomPersonelle: data.nomPersonelle,
      fonction: data.fonction,
      heureDebut: data.heureDebut,
      heureFin: data.heureFin,
    },
  });
};

export const getAllPersonnels = () => {
  return axios.get(`${API_URL}/allpersonelle`);
};
export const gettotalpersonelle=()=>{
  return axios.get(`${API_URL}/totalpersonelle`)
}

export const deletePersonnel = (id) => {
  return axios.delete(`${API_URL}/deletepersonelle/${id}`);
};