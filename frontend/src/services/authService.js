import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData, {
    withCredentials: true
  });
  return response.data;
};

// Logout user
const logout = async () => {
  const response = await axios.get(API_URL + 'logout', {
    withCredentials: true
  });
  return response.data;
};

const authService = {
  register,
  login,
  logout
};

export default authService;