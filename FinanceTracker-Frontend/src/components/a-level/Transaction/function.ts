import axiosInstance from "../../../libs/axiosInstance";
import type { Transaction } from "./types";

export const createTransaction = async (params:Transaction) => {
    const response = await axiosInstance.post('/transaction',params);
    return response.data;
}
export const getTransactions = async (userId:string) => {
    const response = await axiosInstance.get(`/transaction/${userId}`);
    console.log("Get response:",response);
    return response.data;
}
export const deleteTransaction = async (transactionId:string) => {
    const response = await axiosInstance.delete(`/transaction/${transactionId}`);
    console.log("Delete response:",response);
    return response.data;
}