import axiosBase from '../../axiosBase';

interface ItemProps {
	name: string;
}
// store land
export const ItemStore = async (formData: ItemProps) => {
	// console.log(formData);
	const fields = {
		name: formData.name,
	};
	// console.log(fields);

	try {
		const response = await axiosBase.post('/rab-item', fields);
		return response;
	} catch (error: any) {
		if (error.response) {
			console.log('Error Response:', error.response.data);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error;
	}
};

export const ItemUpdate = async (formData: ItemProps, id: string) => {
	// console.log(formData);
	const fields = {
		name: formData.name,
        uuid: id
	};
	console.log(fields);

	try {
		const response = await axiosBase.put('/rab-item', fields);
		return response;
	} catch (error: any) {
		if (error.response) {
			console.log('Error Response:', error.response.data);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error;
	}
};

export const ItemDelete = async (uuid: string) => {
	console.log(uuid);
	try {
		const response = await axiosBase.delete(`/rab-item/${uuid}`);
		return response;
	} catch (error: any) {
		if (error.response) {
			console.log('Error Response:', error.response.data);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error.response;
	}
};
