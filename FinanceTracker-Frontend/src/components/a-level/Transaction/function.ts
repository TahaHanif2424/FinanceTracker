import axiosInstance from "../../../libs/axiosInstance";
import type { Transaction } from "./types";

export const createTransaction = async (params:Transaction) => {
    console.log("Creating transaction with params:", params);
    const response = await axiosInstance.post('/transaction',params);
    console.log(response);
    return response.data;
}
export const getTransactions = async (userId:string) => {
    console.log("Fetching transactions for userId:", userId);
    const response = await axiosInstance.get(`/transaction/${userId}`);
    console.log("Fetched transactions:", response.data);
    return response.data;
}