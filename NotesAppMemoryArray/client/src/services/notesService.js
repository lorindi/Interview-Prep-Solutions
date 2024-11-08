import axios from "axios";

const API_URL = "http://localhost:5000/notes";

export const createNote = async (newData) => {
  return axios.post(`${API_URL}/create`, newData);
};

export const updateNote = async (id, updateData) => {
  return axios.put(`${API_URL}/update/${id}`, updateData);
};

export const deleteNote = async (id) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};

export const allNotes = async () => {
  return axios.get(`${API_URL}/all`);
};

export const singleNote = async (id) => {
  return axios.get(`${API_URL}/note/${id}`);
};
