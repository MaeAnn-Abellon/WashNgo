import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL;

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/users/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_BASE_URL}/users/login`, userData);
};
