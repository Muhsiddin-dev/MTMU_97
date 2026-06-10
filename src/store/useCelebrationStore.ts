import { create } from 'zustand';
import { getCelebrations } from '../api/celebrations';

interface EventImage {
  id: number;
  imageName: string;
}

interface CelebrationEvent {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  images: EventImage[];
}

interface CelebrationState {
  events: CelebrationEvent[]; 
  isLoading: boolean;
  fetchEvents: () => Promise<void>;
}

export const useCelebrationStore = create<CelebrationState>((set) => ({
  events: [],
  isLoading: false,
  fetchEvents: async () => {
    set({ isLoading: true });
    try {
      const response = await getCelebrations();
      const eventsData = response?.data || (Array.isArray(response) ? response : []);
      set({ 
        events: eventsData, 
        isLoading: false 
      });
    } catch (error) {
      set({ isLoading: false });
      console.error("Error fetching celebrations:", error);
    }
  },
}));