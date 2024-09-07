import axios, { AxiosHeaders } from 'axios';
import { GetTokenLogin } from '../AuthServices/AuthService';
import Cookies from 'js-cookie';

// const { token } = GetTokenLogin();

const axiosBase = axios.create({
	baseURL: "/",
	headers: new AxiosHeaders({
		'Content-Type': 'application/json',
	}),
});

axiosBase.interceptors.request.use((config) => {
	// console.log(config);
	const token = Cookies.get('token')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
		// if(config.headers) config.headers.token = token
	}
	return config
},
	(error): any => {
		return Promise.reject(error)
	}
)

// axiosBase.interceptors.response.use((res) => {
// 	console.log(res);
// })

// if (token) {
// 	axios.defaults.headers.common['Authorization'] = token;
// }


export default axiosBase;
