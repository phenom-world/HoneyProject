import axios from "axios";

const API = axios.create({ baseURL: "https://honey-project-app.herokuapp.com" });


export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const forgotPassword = (formData) => API.post("/user/forgotPassword", formData);
export const resetPassword = (resettoken, formData) => API.put(`/user/resetpassword/${resettoken}`, formData);
export const verifyEmail = (id, token) =>  API.get(`/user/verify/${id}/${token}`);