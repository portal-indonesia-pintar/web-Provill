import axiosBase from "../axiosBase";


// get land
export const CompanyGet = async () => {
	try {
		const response = await axiosBase.get('/company')
		return response.data
	} catch (error: any) {
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


interface formProps {
	name: string;
	address: string;
}
// store land
export const CompanyStore = async (formData: formProps) => {

	// console.log(formData);
	const fields = {
		name: formData.name,
		address: formData.address,
	}
	// console.log(fields);

	try {
		const response = await axiosBase.post('/company', fields)
		return response
	} catch (error: any) {
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

// get land
export const CompanyShow = async (uuid: string) => {
	console.log('show uuid data : ', uuid);
	try {
		const response = await axiosBase.get('/company/profile')
		return response.data
	} catch (error: any) {
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



// delete Company
export const CompanyDelete = async (uuid: string) => {
	console.log(uuid);
	try {
		const response = await axiosBase.delete(`/company/${uuid}`)
		console.log(response);
		return response.data
	} catch (error: any) {
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


