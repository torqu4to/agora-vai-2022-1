import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-bruno.onrender.com',
    timeout: 5000,
    //Envia os cookies de vikta em todas as requisições
    withCredentials: true
})

export default api