
import axiosBase from "../axiosBase";


// get cluster
export const RabGet = async () => {
    try {
        const response = await axiosBase.get('/rab')
		return response.data
    } catch (error : any) {
        if (error.response) {
			console.log('Error Response:', error.response.data);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error
    }
}

export const GetItem = async () => {
    try {
        const response = await axiosBase.get('/rab-item')
		return response
    } catch (error : any) {
        if (error.response) {
			console.log('Error Response:', error.response.data);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error.response
    }
}

export const GetUnit = async () => {
    try {
        const response = await axiosBase.get('/rab-unit')
		return response.data
    } catch (error : any) {
        if (error.response) {
			console.log('Error Response:', error.response.data);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error
    }
}






