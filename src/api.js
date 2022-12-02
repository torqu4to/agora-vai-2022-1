import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://agoravai-bruno.onrender.com/',
    credentials: 'include',
    timeout: 10000
})

export default api