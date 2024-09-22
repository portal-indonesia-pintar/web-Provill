
import axiosBase from "../axiosBase";

type form = {
	[key: string] : string;
}

// get cluster
export const ClusterGet = async () => {
    try {
        const response = await axiosBase.get('/cluster')
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


// store cluster
export const ClusterStore = async (formData: form) => {

    // console.log(formData);
    const fields = {
        cluster_name : formData.cluster_name,
        acquisition_date : formData.acquisition_date,
        cluster_owner : formData.cluster_owner,
        cluster_owner_phone : formData.cluster_owner_phone,
        area_size : formData.area_size,
        price_per_m2 : formData.price_per_m2,
        note: formData.note
    }
    // console.log(fields);

    try {
        const response = await axiosBase.post('/cluster', fields)
		return response
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


// detail Cluster
export const ClusterShow = async (uuid : string) => {
    console.log(`/cluster/${uuid}`);
    try {
        const response = await axiosBase.get(`/cluster/${uuid}`)
		console.log(response);
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




