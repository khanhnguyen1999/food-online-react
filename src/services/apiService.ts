import axios from "axios";
const BASE_URL = 'http://api-meme-zendvn-01.herokuapp.com/api';

const api = {
  call() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  callWithAuth(headers = {}) {
    const token = localStorage.getItem("token")

    return axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...headers
      }
    });
  }
}
export default api;