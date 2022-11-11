import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://api.render.com/deploy/srv-cdn4i7cgqg4dscgcclcg?key=gfwGWxjxnp0'  
})

export default api