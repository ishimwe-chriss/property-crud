// src/utils/api.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/properties";

// Fetch all properties
export const getProperties = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Fetch a single property by ID
export const getPropertyById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Create a new property
export const createProperty = async (property) => {
  const response = await axios.post(API_URL, property);
  return response.data;
};

// Update an existing property
export const updateProperty = async (id, property) => {
  const response = await axios.put(`${API_URL}/${id}`, property);
  return response.data;
};

// Delete a property
export const deleteProperty = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
