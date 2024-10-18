export type TTabs = 'Weekly' | 'Monthly' | 'Yearly';
export const TABS: { [key: string]: TTabs } = {
	WEEKLY: 'Weekly',
	MONTHLY: 'Monthly',
	YEARLY: 'Yearly',
};


export const SELECT_PROVINSI: {value: string, text:string}[] = [
	{
		value: 'Sulawesi Selatan',
		text: 'Sulawesi Selatan',
	},
	{
		value: 'Sulawesi Utara',
		text: 'Sulawesi Utara',
	},
	{
		value: 'Sulawesi Tenggara',
		text: 'Sulawesi Tenggara',
	},
	{
		value: 'Sulawesi Barat',
		text: 'Sulawesi Barat',
	},
	{
		value: 'Sulawesi Tengah',
		text: 'Sulawesi Tengah',
	},
]

export const SELECT_KOTA: {value: string, text:string}[] = [
	{
		value: 'Makassar',
		text: 'Makassar',
	},
	{
		value: 'Palu',
		text: 'Palu',
	},
	{
		value: 'Mamuju',
		text: 'Mamuju',
	},
	{
		value: 'Kendari',
		text: 'Kendari',
	},
	{
		value: 'Manado',
		text: 'Manado',
	},
]

export const SELECT_KECAMATAN: {value: string, text:string}[] = [
	{
		value: 'Manggala',
		text: 'Manggala',
	},
	{
		value: 'Bangkala',
		text: 'Bangkala',
	},
	{
		value: 'Tamalanrea',
		text: 'Tamalanrea',
	},
]
