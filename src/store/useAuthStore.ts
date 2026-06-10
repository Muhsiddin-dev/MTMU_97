import { create } from 'zustand';
import axios from 'axios';
import { UrlApi } from '@/config';

interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    isAdmin: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    setTokens: (accessToken: string, refreshToken: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: typeof window !== 'undefined' ? localStorage.getItem('access_token') : null,
    refreshToken: typeof window !== 'undefined' ? localStorage.getItem('refresh_token') : null,
    isAdmin: typeof window !== 'undefined' ? localStorage.getItem('is_admin') === 'true' : false,

    login: async (username, password) => {
        try {
            const response = await axios.post(`${UrlApi.Swagger}${UrlApi.login}`, {
                username,
                password,
            });

            const { accessToken, refreshToken } = response.data;

            if (accessToken && refreshToken) {
                const checkAdmin = true;

                localStorage.setItem('access_token', accessToken);
                localStorage.setItem('refresh_token', refreshToken);
                localStorage.setItem('is_admin', String(checkAdmin));

                set({ accessToken, refreshToken, isAdmin: checkAdmin });
                return true;
            }
            
            return false;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('is_admin');
        set({ accessToken: null, refreshToken: null, isAdmin: false });
    },

    setTokens: (accessToken, refreshToken) => {
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        set({ accessToken, refreshToken });
    },
}));
