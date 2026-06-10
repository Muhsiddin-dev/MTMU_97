import axios from "axios";
import { UrlApi } from "@/config";
import { useAuthStore } from "../store/useAuthStore";

export const SaveToken = (access: string, refresh: string) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
    }
};

export const GetToken = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("access_token");
    }
    return null;
};

export const GetRefreshToken = () => {
    if (typeof window !== "undefined") {
        return localStorage.getItem("refresh_token");
    }
    return null;
};

export const DestroyToken = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
};

const axiosInstance = axios.create({
    baseURL: UrlApi.Swagger,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = GetToken();
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = GetRefreshToken();

                if (!refreshToken) {
                    useAuthStore.getState().logout();
                    DestroyToken();
                    return Promise.reject(error);
                }

                const response = await axios.post(`${UrlApi.Swagger}${UrlApi.RefreshToken}`, {
                    refreshToken: refreshToken,
                });

                const { accessToken, refreshToken: newRefreshToken } = response.data;

                useAuthStore.getState().setTokens(accessToken, newRefreshToken);
                SaveToken(accessToken, newRefreshToken);

                originalRequest.headers.Authorization = `Bearer ${accessToken}`;

                return axiosInstance(originalRequest);
            } catch (refreshError) {
                useAuthStore.getState().logout();
                DestroyToken();
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;