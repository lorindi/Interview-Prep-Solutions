import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

export const createNote = async (noteData) => {
  return axios.post(`${API_URL}/create`, noteData);
};

export const updateNote = async (id, updatedData) => {
  return axios.put(`${API_URL}/update/${id}`, updatedData);
};

export const deleteNote = async (id) => {
  return axios.delete(`${API_URL}/delete/${id}`);
};

export const getNotes = async () => {
  return axios.get(`${API_URL}/list`);
};

export const getNoteDetails = async (id) => {
  return axios.get(`${API_URL}/details/${id}`);
};
