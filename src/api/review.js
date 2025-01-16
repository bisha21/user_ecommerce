import axios from "axios";
import { useSelector } from "react-redux";
import config from "../config/config";

 export const addReview = async (id,data) => {
    const authToken = localStorage.getItem("authToken");
    const response = await axios.post(`${config.baseApiUrl}/api/products/${id}/reviews`, data, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
  
    return response;
  };