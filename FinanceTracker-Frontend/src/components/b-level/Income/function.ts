import axiosInstance from "../../../libs/axiosInstance";

export const getIncome = async (userId:string) => {
    try {
        const response = await axiosInstance.get(`/expense/monthly/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching income data:", error);
        throw error;
    }   
};

export const addIncome = async (userId:string, monthlyIncome:number) => {
    try {
        console.log("Adding income:", { userId, monthlyIncome });
        const response = await axiosInstance.put(`/expense/monthly-income`, {
            userId,
            monthlyIncome
        });
        console.log("Income added successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error adding income:", error);   
        throw error;
    }
};