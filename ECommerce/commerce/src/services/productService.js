import axios from "axios";



const API_URL = "http://localhost:4000";

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products/get`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
};
export const placeOrder = async (orderData) => {
    try {
        const response = await axios.post(`${API_URL}/products/placeorder`, orderData);
        return response.data;
    } catch (error) {
        console.error("Error placing order:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
};