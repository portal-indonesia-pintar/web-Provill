
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
			console.log('Error :', error.response.data.code);
		} else if (error.request) {
			console.log('Error Request:', error.request);
		} else {
			console.log('Error:', error.message);
		}
		return error.response.data.code
    }
}

interface ClusterProps {
    land_id: string;
    name: string;
    province: string;
    city: string;
    subdistrict: string;
    village: string;
    address: string;
    phone_number: string | number;
    total_land_area: string | number;
    siteplan: string;
}
// store cluster
export const ClusterStore = async (formData: ClusterProps) => {

    // console.log(formData);
    const fields = {
        land_id : formData.land_id,
        name : formData.name,
        province : formData.province,
        city : formData.city,
        subdistrict : formData.subdistrict,
        village : formData.village,
        address: formData.address,
        phone_number: formData.phone_number,
        total_land_area: formData.total_land_area,
        siteplan: formData.siteplan,
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

export const ClusterDelete = async (uuid : string) => {
    console.log(`/cluster/${uuid}`);
    try {
        const response = await axiosBase.delete(`/cluster/${uuid}`)
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




