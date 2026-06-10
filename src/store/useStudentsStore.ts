import { number } from "motion";
import { create } from "zustand";
import { NextResponse } from 'next/server';
import { GetStudents } from "../api/students";

export interface Student {
    id: number;
    fullName: string;
    photoUrl: string;
    rank: string;
    competition: string;
    motto: string;
    description: string
    createdAt: string
    updatedAt: string
}

interface StudentsState {
    students: Student[];
    isLoading: boolean;
    GetDataStudents: () => Promise<void>;
}

export const useStudentsStore = create<StudentsState>((set) => ({
    students: [],
    isLoading: false,

    GetDataStudents: async () => {
        set({ isLoading: true });
        try {
            const response = await GetStudents();
            const studentsData = response 
            set({
                students: studentsData,
                isLoading: false
            });
        } catch (error) {
            console.error(error);

        }
    }

})

)