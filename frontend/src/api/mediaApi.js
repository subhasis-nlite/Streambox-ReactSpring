import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

export async function fetchMediaList() {
  const response = await api.get("/media");
  return response.data;
}

export async function fetchMediaById(id) {
  const response = await api.get(`/media/${id}`);
  return response.data;
}

export async function createMedia(mediaData) {
  const response = await api.post("/media", mediaData);
  return response.data;
}

export async function updateMedia(id, mediaData) {
  const response = await api.put(`/media/${id}`, mediaData);
  return response.data;
}

export async function deleteMedia(id) {
  await api.delete(`/media/${id}`);
}
