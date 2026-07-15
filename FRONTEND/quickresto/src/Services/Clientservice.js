import axios from "axios";

const API_URL = "http://localhost:8080/api/client";


export const createClient = (client) => {
  return axios.post(`${API_URL}/createclient`, client, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTotalClients = () => {
  return axios.get(`${API_URL}/totalclient`);
};

export const getAllClients = () => {
  return axios.get(`${API_URL}/allclient`);
};

export const deleteClient = (id) => {
  return axios.delete(`${API_URL}/deleteclient/${id}`);
};