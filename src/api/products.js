import axios from "axios";
import config from "../config/config";
const authToken = localStorage.getItem("authToken");

const getProducts = async ({
  limit=10,
  sort = JSON.stringify({ createdAt: -1 }),
  filters = {},
}) => {
  // sort: sorting key, sort order (1: ASC, -1: DESC)
  // filterBy: key, value for e.g name: iphone
  const query = `limit=${limit}&sort=${sort}&filters=${JSON.stringify(filters)}`;

  const response = await axios.get(
    `${config.baseApiUrl}/api/products?${query}`
  );

  return response;
};
const getProductById = async (id) => {
  try {
    const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
const addProduct = async (data) => {
  const response = await axios.post(`${config.baseApiUrl}/api/products`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response;
};

const editProduct = async (id, data) => {
  const response = await axios.put(`${config.baseApiUrl}/api/products/${id}`, data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response;
};

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${config.baseApiUrl}/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response;
  } catch (error) {
    if (error.response) {
      console.error('Server Error:', error.response.data);
      throw new Error(error.response.data || 'Failed to delete product');
    } else if (error.request) {
      console.error('Network Error:', error.request);
      throw new Error('Network error: No response received');
    } else {
      console.error('Error:', error.message);
      throw new Error(error.message || 'An unknown error occurred');
    }
  }
};

const getCategories = async () => {
  const response = await axios.get(`${config.baseApiUrl}/api/products/categories`);
  return response;
};

export { getProducts, getProductById, addProduct, editProduct, deleteProduct, getCategories };
