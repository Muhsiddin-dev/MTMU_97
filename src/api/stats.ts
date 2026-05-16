import axios from 'axios';

export const getStats = async () => {
  const response = await axios.get('/api/statistics');
  return response.data;
};