import { create } from 'zustand';
import { getCelebrations } from '../api/celebrations';

interface CelebrationState {
  events: any[];
  isLoading: boolean; // <-- ИНҶОРО ИСЛОҲ КУНЕД: TypeScript бояд донад, ки чунин хосият ҳаст
  fetchEvents: () => Promise<void>;
}

export const useCelebrationStore = create<CelebrationState>((set) => ({
  events: [],
  isLoading: false, // Акнун ин хатогӣ намедиҳад
  fetchEvents: async () => {
    set({ isLoading: true });
    try {
      const data = await getCelebrations();
      // Фаромӯш накунед, ки баъди гирифтани маълумот isLoading-ро false кунед
      set({ events: data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.error("Error fetching celebrations:", error);
    }
  },
}));