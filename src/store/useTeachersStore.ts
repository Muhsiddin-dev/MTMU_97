import { create } from 'zustand';
import { getTeachers, PostTeacher } from '../api/teachers';

export interface Teacher {
    id: number,
    fullName: string,
    photoUrl: string,
    birthDate: string,
    experience: number
    motto: string
    description: string
    ratingNumber: number
    ratingCount: number
    specialty: string
    createdAt: string
    updatedAt: string
}

interface TeachersState {
    teachers: Teacher[];
    isLoading: boolean;
    GetDataTeachers: () => Promise<void>;
    addTeacher: (data: Teacher) => Promise<void>;
}

export const useTeachersStore = create<TeachersState>((set) => ({
    teachers: [],
    isLoading: false,

    GetDataTeachers: async () => {
        set({ isLoading: true });
        try {
            const response = await getTeachers();
            const teachersData = response?.data || (Array.isArray(response) ? response : []);
            set({
                teachers: teachersData,
                isLoading: false
            });
        } catch (error) {
            set({ isLoading: false });
            console.error("Error fetching teachers:", error);
        }
    },

    addTeacher: async (data: Teacher) => {
        set({ isLoading: true })
        try {
            const response = await PostTeacher(data)
            const newTeacher = response?.data || response

            if (newTeacher) {
                set((state) => ({
                    teachers: [...state.teachers, newTeacher],
                    isLoading: false
                }))
            } else {
                set({ isLoading: false })
            }
        } catch (error) {
            set({ isLoading: false })
            console.error("Error creating Teacher:", error)
        }
    }
}));