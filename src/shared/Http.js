import axios from 'axios'

const baseURL = process.env.API_URL

const responseInterceptor = (res) => {
  return res.data;
}

const HTTP = axios.create({
  baseURL
})
HTTP.interceptors.response.use(responseInterceptor)

const AuthHTTP = axios.create({
  baseURL,
  headers: {
    Authorization: 'Bearer {yourtokenhere}'
  }
})
AuthHTTP.interceptors.response.use(responseInterceptor)


export { HTTP, AuthHTTP }

