import axios from "axios";
import { Company } from "../types/types";

export const fetchCompanyData = async (): Promise<Company[]> => {
  try {
    const response = await axios.get<Company[]>("/companies-lookup.json");
    console.log("Response data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching company data:", error);
    throw error;
  }
};
