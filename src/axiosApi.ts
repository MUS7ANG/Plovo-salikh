import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://console.firebase.google.com/u/0/project/sasalele-glogo/database/sasalele-glogo-default-rtdb/data/~2F?fb_gclid=Cj0KCQiAq-u9BhCjARIsANLj-s1Zpy-9-EAdODduUhTyMhMDzwRqhukO-yJB5MowF4T6OPLjO4ov9GwaApN0EALw_wcB',
});

export default axiosApi;