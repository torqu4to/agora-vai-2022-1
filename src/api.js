import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-bruno.onrender.com'  
})

export default api