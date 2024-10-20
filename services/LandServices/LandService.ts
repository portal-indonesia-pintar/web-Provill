import axiosBase from "../axiosBase";


// get land
export const LahanGet = async () => {
    try {
        const response = await axiosBase.get('/land')
        // console.log(response);
        return response
    } catch (error: any) {
        if (error.response) {
            console.log('Error Response:', error.response.status);
            console.log('Error Response:', error.response.data);
        } else if (error.request) {
            console.log('Error Request:', error.request);
        } else {
            console.log('Error:', error.message);
        }
        return error.response
    }
}


interface LahanProps {
    land_name: string;
    acquisition_date: string;
    land_owner: string;
    land_owner_phone: string;
    area_size: string | number;
    price_per_m2: string | number;
    note: string;
}
// store land
export const LahanStore = async (formData: LahanProps) => {

    // console.log(formData);
    const fields = {
        land_name: formData.land_name,
        acquisition_date: formData.acquisition_date,
        land_owner: formData.land_owner,
        land_owner_phone: formData.land_owner_phone,
        area_size: formData.area_size,
        price_per_m2: formData.price_per_m2,
        note: formData.note
    }
    // console.log(fields);

    try {
        const response = await axiosBase.post('/land', fields)
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


// detail lahan
export const LahanShow = async (uuid: string) => {
    console.log(`/land/${uuid}`);
    try {
        const response = await axiosBase.get(`/land/${uuid}`)
        // console.log(response);
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





