import axios from "axios";
const url = {
  baseUrl: "http://localhost/LTFE/BackEnd/public/api",
  home: "/admin",
  user: "/admin/user",
  game: "/admin/game",
  genre: "/admin/genre",
  profile: "/admin/profile",
};
const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const api = {
  url,
  get: instance.get,
  post: instance.post,
  delete: instance.delete,
  put: instance.put,
  patch: instance.patch,
};
export default api;
