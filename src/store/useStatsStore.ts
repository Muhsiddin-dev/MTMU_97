import { create } from 'zustand';
import { getStats } from '../api/stats';

export const useStatsStore = create((set) => ({
  stats: [],
  fetchStats: async () => {
    const data = await getStats();
    set({ stats: data });
  },
}));