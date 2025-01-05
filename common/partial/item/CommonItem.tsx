import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import PageWrapper from '@call-layout/PageWrapper/PageWrapper';
import Page from '@call-layout/Page/Page';
import Card, { CardBody } from '@call-components/bootstrap/Card';
import useSelectTable from '@call-hooks/useSelectTable';
import PaginationButtons, { dataPagination } from '@call-components/PaginationButtons';
import useSortableData from '@call-hooks/useSortableData';
import Icon from '@call-components/icon/Icon';
import Button from '@call-components/bootstrap/Button';
import Select from '@call-components/bootstrap/forms/Select';
import Input from '@call-components/bootstrap/forms/Input';
import FormGroup from '@call-components/bootstrap/forms/FormGroup';
import { GetItem, GetUnit } from '@call-root-lib/services/RabServices/RabService';
import { useFormik } from 'formik';
import Option from '@call-components/bootstrap/Option';

interface Rab {
	rab_item_id: string;
	rab_unit_id: string;
	quantity: number;
	price: number;
	increase_percentage: number;
	total_price_rab: number;
	total_price_rap: number;
}

interface RabError {
	rab_item_id: string;
	rab_unit_id: string;
	quantity: string;
	price: string;
	increase_percentage: string;
	total_price_rab: string;
	total_price_rap: string;
}

interface formItem {
	id: number;
	value: string;
}

interface CommonItemProps {
	formItem: any[];
	handleItemChange: (id: string, field: string, value: any) => void;
	hapusItem: (id: string) => void;
	tambahItem: () => void;
}

const CommonItem: NextPage<CommonItemProps> = ({
	formItem,
	handleItemChange,
	hapusItem,
	tambahItem,
}) => {
	const formikCreate = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: '',
			rab: [] as Rab[],
			notify: true,
		},
		validate: (values) => {
			const errors: {
				name?: string;
				rab?: Array<Partial<RabError> | undefined>;
			} = {};

			if (!values.name) {
				errors.name = 'Required';
			}
			if (!values.rab || values.rab.length === 0) {
				errors.rab = [{ rab_item_id: 'Required' }];
			} else {
				const rabErrors: Array<Partial<RabError> | undefined> = [];

				values.rab.forEach((rabItem, index) => {
					const rabItemErrors: Partial<RabError> = {};

					if (!rabItem.rab_item_id) {
						rabItemErrors.rab_item_id = 'Required';
					}

					if (!rabItem.rab_unit_id) {
						rabItemErrors.rab_unit_id = 'Required';
					}

					if (!rabItem.quantity || rabItem.quantity <= 0) {
						rabItemErrors.quantity = 'Tidak valid';
					}

					if (!rabItem.price || rabItem.price <= 0) {
						rabItemErrors.price = 'Tidak valid';
					}

					if (rabItem.increase_percentage <= 0 || rabItem.increase_percentage > 100) {
						rabItemErrors.price = 'Tidak valid, Range 0 - 100';
					}

					if (!rabItem.total_price_rab || rabItem.total_price_rab <= 0) {
						rabItemErrors.total_price_rab = 'Tidak valid';
					}

					if (!rabItem.total_price_rap || rabItem.total_price_rap <= 0) {
						rabItemErrors.total_price_rap = 'Tidak valid';
					}

					if (Object.keys(rabItemErrors).length > 0) {
						rabErrors[index] = rabItemErrors;
					}
				});
				if (rabErrors.length > 0) {
					errors.rab = rabErrors;
				}
			}

			return errors;
		},

		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {
			// console.log(values);
			// const isStored = await ClusterStore(values);
			// if (isStored?.status === 200) {
			// 	resetForm();
			// 	setDataChange(!dataChange);
			// 	AlertProses({ status: 'add' });
			// 	setAddClusterModal(false);
			// } else {
			// 	return false;
			// }
		},
	});

	// get rab unit dan item
	const [getUnit, setGetUnit] = useState<any>([]);
	const [getItem, setGetItem] = useState<any>([]);

	const unit = async () => {
		const data: any[] = [];
		try {
			const res = await GetUnit();
			res.data.data.forEach((i: any) => {
				data.push({
					value: i.uuid,
					text: i.name,
				});
			});
			setGetUnit(data);
		} catch (error) {
			console.log(error);
		}
		return;
	};

	const item = async () => {
		const data: any[] = [];
		try {
			const res = await GetItem();
			res.data.data.forEach((i: any) => {
				data.push({
					value: i.uuid,
					text: i.name,
				});
			});
			setGetItem(data);
		} catch (error) {
			console.log(error);
		}
		return;
	};

	useEffect(() => {
		unit();
		item();
	}, []);

	return (
		<PageWrapper>
			<Page>
				<Card>
					<CardBody>
						<table className='table table-modern'>
							<thead>
								<tr>
									<th scope='col' className='text-decoration-underline'>
										No
									</th>
									<th
										style={{ width: '200px' }}
										scope='col'
										className='text-decoration-underline'>
										Item
									</th>
									<th
										style={{ width: '130px' }}
										scope='col'
										className='text-decoration-underline'>
										Unit
									</th>
									<th scope='col' className=''>
										Jumlah
									</th>
									<th scope='col' className=''>
										(%) Naik
									</th>
									<th style={{ width: '150px' }} scope='col' className=''>
										Harga
									</th>
									<th style={{ width: '150px' }} scope='col' className=''>
										Total
									</th>
									<th scope='col' className='text-end'>
										<Button
											onClick={() => tambahItem()}
											color={'success'}
											isLight
											icon='Add'
										/>
									</th>
								</tr>
							</thead>
							<tbody>
								{formItem.map((form, index) => (
									<tr key={form.id}>
										<td>{++index}</td>
										<td>
											<Select
												// size='md'
												ariaLabel='Default select example'
												placeholder='-- Item --'
												onChange={(e: any) =>
													handleItemChange(
														form.id,
														'rab_item_id',
														e.target.value,
													)
												}
												value={form.rab_item_id || ''}>
												{getItem.map((i: any) => (
													<Option key={i.value} value={i.value}>
														{i.text}
													</Option>
												))}
											</Select>
										</td>
										<td>
											<Select
												// size='md'
												ariaLabel='Default select example'
												placeholder='-- Unit --'
												onChange={(e: any) =>
													handleItemChange(
														form.id,
														'rab_unit_id',
														e.target.value,
													)
												}
												value={form.rab_unit_id || ''}>
												{getUnit.map((i: any) => (
													<Option key={i.value} value={i.value}>
														{i.text}
													</Option>
												))}
											</Select>
										</td>

										<td>
											<Input
												// size='md'
												type='number'
												placeholder='0'
												aria-label='.form-control-sm example'
												value={form.quantity || ''}
												onChange={(e: any) =>
													handleItemChange(
														form.id,
														'quantity',
														e.target.value,
													)
												}
											/>
										</td>
										<td>
											<Input
												// size='md'
												type='number'
												placeholder='0'
												aria-label='.form-control-sm example'
												value={form.increase_percentage || ''}
												onChange={(e: any) =>
													handleItemChange(
														form.id,
														'increase_percentage',
														e.target.value,
													)
												}
											/>
										</td>
										<td>
											<Input
												// size='md'
												type='number'
												placeholder='0'
												aria-label='.form-control-sm example'
												value={form.price || ''}
												onChange={(e: any) =>
													handleItemChange(
														form.id,
														'price',
														e.target.value,
													)
												}
											/>
										</td>
										<td>
											<FormGroup
												id='exampleTypesPlaceholder--'
												label='Total RAP'
												labelClassName='text-capitalize'>
												<Input
													// size='md'
													readOnly
													type='number'
													placeholder='0'
													aria-label='.form-control-sm example'
												/>
											</FormGroup>
											<FormGroup
												id='exampleTypesPlaceholder--'
												label='Total RAB'
												labelClassName='text-capitalize'>
												<Input
													// size='md'
													readOnly
													type='number'
													placeholder='0'
													aria-label='.form-control-sm example'
												/>
											</FormGroup>
										</td>
										<td className='text-end'>
											<Button
												color='danger'
												onClick={() => hapusItem(form.id)}
												isLight
												icon='Delete'
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</CardBody>
				</Card>
			</Page>
		</PageWrapper>
	);
};

export default CommonItem;
