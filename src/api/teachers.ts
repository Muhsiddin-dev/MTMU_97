import { UrlApi } from "@/config"
import { Teacher } from "../store/useTeachersStore"
import axiosInstance from "./axiosInstance";

export const getTeachers = async () => {
    try {
        const response = await axiosInstance.get(`${UrlApi.Swagger}${UrlApi.Url_Api_Teachers}`)
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const PostTeacher = async (data: Teacher) => {
    try {
        const token = typeof window !== 'undefined' ? localStorage.getItem("access_token") : null;
        
        if (!token) {
            console.error("Хатогӣ: Токен дар localStorage ёфт нашуд! Аввал логин кунед.");
        }

        const response = await axiosInstance.post(`${UrlApi.Swagger}${UrlApi.Url_Api_Teachers}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Хатогии дастрасӣ дар PostTeacher:", error);
        throw error;
    }
}