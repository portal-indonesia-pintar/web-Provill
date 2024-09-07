
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

export const RabItemGet = async () => {
    try {
        const response = await axiosBase.get('/rab-item')
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

export const RabUnitGet = async () => {
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






