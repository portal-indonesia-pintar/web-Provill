import axiosBase from "../../axiosBase";

interface UnitProps {
    name: string;
}
// store land
export const UnitStore = async (formData: UnitProps) => {

    // console.log(formData);
    const fields = {
        name: formData.name,
    }
    console.log(fields);

    try {
        const response = await axiosBase.post('/rab-unit', fields)
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

export const UnitDelete = async (uuid: string) => {
	try {
		const response = await axiosBase.delete(`/rab-unit/${uuid}`)
		return response
	} catch (error: any) {
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




