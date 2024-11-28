import axios from "axios";
import config from "../../config/config";
// Login API call
const login = async ({ email, password }) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/login`, {
    email,
    password,
  });
  return response;
};

// Register API call
const register = async ({ name, email, password, confirmPassword }) => {
  const response = await axios.post(`${config.baseApiUrl}/api/auth/register`, {
    name,
    email,
    password,
    confirmPassword,
  });
  return response;
};

// Exporting both functions as part of an object
export  {
  login,
  register,
};
