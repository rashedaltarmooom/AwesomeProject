export const baseURL = "http://192.168.52.20:8080";
import { instance } from "./instance";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
