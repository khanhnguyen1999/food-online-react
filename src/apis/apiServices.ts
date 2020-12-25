import axios from 'axios'

const baseURL = "http://localhost:3000/user"


const api = {
  call() {
    return axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
export default api