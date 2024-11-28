import axios from "axios";
import config from "../config/config";
const authToken = localStorage.getItem("authToken");

const createOrder = async (data) => {
    const response = await axios.post(`${config.baseApiUrl}/api/order`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  
    return response;
  };
  export  {createOrder};