import axios from "axios";

// src/api/celebrations.ts
export const getCelebrations = async () => {
  try { 
    const response = await axios.get("https://to-dos-api.softclub.tj/api/to-dos");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};  
