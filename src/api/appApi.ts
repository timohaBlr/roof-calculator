import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://api.github.com/repositories/604581677/contents/data/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
    }
})