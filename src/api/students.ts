import { UrlApi } from "@/config";
import { Student } from "../store/useStudentsStore";
import axiosInstance from "./axiosInstance";

export const GetStudents = async () => {
    try {
        const response = await axiosInstance.get(`${UrlApi.Url_Api_Students}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching students:", error);
        throw error;
    }
};

export const DeleteStudent = async (id: number) => {
    try {
        const response = await axiosInstance.delete(`${UrlApi.Url_Api_Students}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting student:", error);
        throw error;
    }
};

export const EditStudent = async (item: Student) => {
    try {
        const response = await axiosInstance.put(`${UrlApi.Url_Api_Students}/${item.id}`, item);
        return response.data;
    } catch (error) {
        console.error("Error editing student:", error);
        throw error;
    }
};