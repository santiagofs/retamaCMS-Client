import axios from 'axios';

const baseURL = process.env.API_URL

export const HTTP = axios.create({
  baseURL
})
