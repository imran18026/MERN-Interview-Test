/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://mern-drawing-server.vercel.app/api/v1/drawings" ||
  "http://localhost:5000/api/v1/drawings";

export const fetchAllDrawings = () => axios.get(API_BASE_URL);
export const fetchDrawingById = (id: string) =>
  axios.get(`${API_BASE_URL}/${id}`);
export const createDrawing = (data: any) =>
  axios.post(`${API_BASE_URL}/create`, data);
export const deleteDrawing = (id: string) =>
  axios.delete(`${API_BASE_URL}/${id}`);
export const updateDrawing = (id: string, data: any) =>
  axios.patch(`${API_BASE_URL}/${id}`, data);
