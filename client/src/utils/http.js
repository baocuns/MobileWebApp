import axios from "axios";
import { API_KEY } from "./constant";

export const geoSeacrch = axios.create({
    baseURL: `https://api.geoapify.com/v1/geocode/search`,
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    }
  });
  