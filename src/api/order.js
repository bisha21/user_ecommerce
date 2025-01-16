import axios from "axios";
import config from "../config/config";
const authToken = localStorage.getItem("authToken");
const createOrder = async (data) => {
  try {
    const response = await axios.post(`${config.baseApiUrl}/api/order`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    console.log('Order created successfully:', response.data);
    return response;
  } catch (error) {
    console.error('Error creating order:', error.response?.data || error.message);
    throw error;
  }
};
export default createOrder;