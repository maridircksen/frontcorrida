import axios from 'axios'; 

const api = axios.create(
    {
      baseURL: "https://localhost:7060/api"  
    }
)

export default api;