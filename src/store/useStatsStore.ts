import { create } from 'zustand';
import { getCelebrations } from '../api/celebrations';

interface CelebrationState {
  events: any[];
  fetchEvents: () => Promise<void>;
}

export const useCelebrationStore = create<CelebrationState>((set) => ({
  events: [],
  fetchEvents: async () => {
    const data = await getCelebrations(); 
    set({ events: data });
  },
}));