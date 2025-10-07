import axiosInstance from "../../../libs/axiosInstance";

export const addBalance = async (balance: number, userId: string) => {
  try {
    console.log("Adding balance:", { balance, userId });
    const response = await axiosInstance.put(`/expense/balance`, { balance,userId });
    console.log("Balance added:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding balance:", error);
    throw error;
  }
};
export const getBalance = async (userId:string) => {
  try {
    const response = await axiosInstance.get(`/expense/balance/${userId}`);
    console.log("Fetched balance:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};