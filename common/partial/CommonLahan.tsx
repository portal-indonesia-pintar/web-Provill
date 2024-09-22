import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { FormikHelpers, useFormik } from 'formik';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import Icon from '../../components/icon/Icon';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '@call-components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Textarea from '../../components/bootstrap/forms/Textarea';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
import Select from '@call-components/bootstrap/forms/Select';
import TipeBayar from '@call-components/lahan/TipeBayar';
import { LahanGet, LahanShow, LahanStore } from '@call-root-lib/services/LandServices/LandService';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Spinner from '@call-components/bootstrap/Spinner';
import { toRupiah } from '../../helpers/helpers';

// alert proses data
interface IAlertProsesProps {
	isProses?: boolean;
	status?: string;
}

interface alertProps {
	icon: string | undefined;
	title: string;
	message: string;
}

const AlertProses = ({ status }: IAlertProsesProps) => {
	const alertOptions: any = {
		icon: 'success',
		title: `Berhasil ${status}`,
		message: `Data lahan telah di ${status === 'add' ? 'Tambah' : (status === 'update') ? 'Update' : (status === 'hapus') ? 'Hapus' : ''}`,
	};

	withReactContent(Swal).fire({
		icon: alertOptions.icon,
		title: alertOptions.title,
		text: alertOptions.message,
	})


};

interface IDataLahanProps {
	isFluid?: boolean;
}
const CommonLahan: FC<IDataLahanProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [dataChange, setDataChange] = useState(false)

	// data form
	const [vCatatan, setVcatatan] = useState('');
	// console.log(vCatatan);

	const SELECT_OPTIONS_CATATAN = [
		{ value: 'Belum', text: 'Pembelian Laham Baru (Belum dicatat pada Persediaan Tanah' },
		{ value: 'Sudah', text: 'Sebelumnya sudah dibeli (Sudah dicatat Persediaan Tanah' },
	];

	const SELECT_OPTIONS_CLUSTER = [
		{ value: 'Cluster 1', text: 'Cluster 1' },
		{ value: 'Cluster 2', text: 'Cluster 2' },
		{ value: 'Cluster 3', text: 'Cluster 3' },
	];

	const [state, setState] = useState(false);

	// BEGIN :: Upcoming Events
	const [editModalLahan, setEditModalLahan] = useState(false);
	const handleEditLahan = async (uuid: string) => {
		// console.log(uuid);
		const res = await LahanShow(uuid)
		console.log(res.data);
		// setEditModalLahan(!editModalLahan);
	};

	const [modalHapusLahan, setModalHapusLahan] = useState(false);
	const handleModalHapus = () => {
		setModalHapusLahan(!modalHapusLahan);
	};

	// const handleChangeCatatan = (e) => {
	// 	setVcatatan(e.target.value);
	// };
	// END :: Upcoming Events

	// handle add lahan form
	const [addLahanModal, setAddLahanModal] = useState(false);
	const handleAddLahan = (val: any) => {
		val.preventDefault();
		formikAdd.handleSubmit(val)
	}

	const formikAdd = useFormik({
		enableReinitialize: true,
		initialValues: {
			land_name: '',
			acquisition_date: '',
			land_owner: '',
			land_owner_phone: '',
			area_size: '',
			price_per_m2: '',
			note: '',
			notify: true,
		},
		validate: (values) => {
			const errors: {
				land_name?: string;
				land_owner?: string;
				acquisition_date?: string;
				land_owner_phone?: string;
				area_size?: string | number,
				price_per_m2?: string | number,
				note?: string,
			} = {};

			if (!values.land_name) {
				errors.land_name = 'Required';
			}
			if (!values.land_owner) {
				errors.land_owner = 'Required';
			}
			if (!values.acquisition_date) {
				errors.acquisition_date = 'Required';
			}
			if (!values.area_size) {
				errors.area_size = 'Required';
			}
			if (!values.price_per_m2) {
				errors.price_per_m2 = 'Required';
			}
			if (!values.note) {
				errors.note = 'Required';
			}
			if (!values.land_owner_phone) {
				errors.land_owner_phone = 'Required';
			} else if (values.land_owner_phone.length >= 18) {
				errors.land_owner_phone = 'Nomor HP minimal 18 characters';

			}

			return errors
		},
		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {
			console.log(values);
			// setShowToast(true)
			const isStored = await LahanStore(values);
			console.log(isStored);

			formikAdd.resetForm();
			if (isStored?.status === 200) {
				AlertProses({ status: 'add' })
				resetForm();
				setDataChange(!dataChange)
			} else {
				return ''
			}
		}
	});

	// get data lahan
	const [dataLahan, setDataLahan] = useState<any>([])
	console.log(dataLahan);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items, requestSort, getClassNamesFor } = useSortableData(dataLahan);

	const getLahan = async () => {
		try {
			setState(false)
			const res = await LahanGet();
			if (res.status === 200) {
				const response = res.data
				setDataLahan(response.data)
			}

			setState(true)
		} catch (error) {
			console.log(error)
			setState(false)
		}
	}

	useEffect(() => {
		getLahan();
	}, [dataChange])

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Alarm' iconColor='info'>
						<CardTitle>Data Lahan</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							color='primary'
							icon='Add'
							isLight
							onClick={() => {
								setAddLahanModal(true);
								formikAdd.resetForm()
							}}>
							Tambah Lahan
						</Button>
					</CardActions>
				</CardHeader>
				{state ? (
					<>
						<CardBody className='table-responsive' isScrollable={isFluid}>
							<table className='table table-modern'>
								<thead>
									<tr>
										<th>No</th>
										<th
											onClick={() => requestSort('date')}
											className='cursor-pointer text-decoration-underline'>
											Tanggal Perolehan{' '}
											<Icon
												size='lg'
												className={getClassNamesFor('date')}
												icon='FilterList'
											/>
										</th>
										<th>Nama Lahan</th>
										<th>Pemilik Tanah</th>
										<th>Luas Area (m2)</th>
										<th>Harga per m2</th>
										<th style={{ width: 150 }}>Catatan</th>
										{/* <th>Status</th> */}
										<td style={{ width: 60 }} />

										<td />
									</tr>
								</thead>
								<tbody>
									{dataLahan.length > 0 ? (
										<>
											{dataPagination(items, currentPage, perPage).map((item, index) => (
												<tr key={index}>
													<td>{++index}</td>
													<td>
														<div className='d-flex align-items-center'>
															<span className='text-nowrap'>
																{dayjs(`${item.acquisition_date}`).format(
																	'DD-MMMM-YYYY',
																)}
															</span>
														</div>
													</td>
													<td>
														<div className='d-flex'>
															<div className='flex-grow-1 ms-3 d-flex align-items-center text-nowrap'>
																{item.land_name}
															</div>
														</div>
													</td>
													<td>
														<div>{item.land_owner}</div>
													</td>
													<td className='text-nowrap'>{item.area_size} m2</td>
													<td className='text-nowrap'>{toRupiah(item.price_per_m2)}</td>
													<td className='text-nowrap'>{item.note}</td>

													<td>
														<div className='d-flex flew-row'>
															<Button
																isOutline={!darkModeStatus}
																color='dark'
																isLight={darkModeStatus}
																className={classNames(
																	'text-nowrap',
																	{
																		'border-light': !darkModeStatus,
																	},
																	'mx-3',
																)}
																icon='Edit'
																onClick={() => handleEditLahan(item.uuid)}>
																Edit
															</Button>

															{/* <Button
															isOutline={!darkModeStatus}
															color='danger'
															isLight={darkModeStatus}
															className={classNames('text-nowrap', {
																'border-light': !darkModeStatus,
															})}
															icon='Delete'
															onClick={handleModalHapus}>
															Hapus
														</Button> */}
														</div>
													</td>
												</tr>
											))}
										</>

									) : (
											<td colSpan={9} >
												<h6 className='text-center text-nowrap mt-2'>Tidak ada data</h6>
											</td>
									)
									}
								</tbody>
							</table>
						</CardBody>
						<PaginationButtons
							data={items}
							label='items'
							setCurrentPage={setCurrentPage}
							currentPage={currentPage}
							perPage={perPage}
							setPerPage={setPerPage}
						/>
					</>

				)
					: (
						<div className="m-5 text-center">
							<Spinner size={50} color='primary' />
						</div>
					)}
			</Card>

			{/* Modal Add Lahan */}
			<Modal
				isOpen={addLahanModal}
				setIsOpen={setAddLahanModal}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='xl'
				fullScreen='xl'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Tambah Data Lahan
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<form onSubmit={handleAddLahan}>
						<div className='row'>
							<div className='col-lg'>
								<div className='row g-4'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Nama Tanah'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='text'
												placeholder='Masukkan Nama Tanah'
												aria-label='.form-control-lg example'
												name='land_name'
												value={formikAdd.values.land_name}
												isTouched={formikAdd.touched.land_name}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.land_name
												}
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Nama Pemilik Tanah'
											labelClassName='text-capitalize'>

											<Input
												// size='md'
												type='text'
												placeholder='Masukkan Nama Pemilik Tanah'
												aria-label='.form-control-lg example'
												name='land_owner'
												value={formikAdd.values.land_owner}
												isTouched={formikAdd.touched.land_owner}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.land_owner
												}
											/>
										</FormGroup>
									</div>
								</div>

								<div className='row g-4 mt-2'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Tanggal Perolehan'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='date'
												placeholder='Tanggal Perolehan Lahan'
												aria-label='.form-control-lg example'
												name='acquisition_date'
												value={formikAdd.values.acquisition_date}
												isTouched={formikAdd.touched.acquisition_date}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.acquisition_date
												}
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='No. Hp Tuan Tanah (digit tidak harus terisi semua)'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='tel'
												placeholder='08XX-XXXX-XXXX'
												name='land_owner_phone'
												mask='089-9999-9999-99'

												value={formikAdd.values.land_owner_phone.replace(/_/g, '').replace(/-/g, '')}
												isTouched={formikAdd.touched.land_owner_phone}
												onChange={(e: any) => {
													const value = e.target.value.replace(/_/g, '').replace(/-/g, '');
													console.log(value);
													formikAdd.setFieldValue('land_owner_phone', value)
												}}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.land_owner_phone
												}
											/>
										</FormGroup>
									</div>
								</div>

								<div className='row g-4 mt-2'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--'
											label='Luas Area'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='number'

												placeholder='Luas Area Tanah'
												aria-label='.form-control-lg example'
												name='area_size'
												value={formikAdd.values.area_size}
												isTouched={formikAdd.touched.area_size}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.area_size
												}
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Harga per m^2'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='number'
												placeholder='Harga tanah per m^2'
												name='price_per_m2'
												value={formikAdd.values.price_per_m2}
												isTouched={formikAdd.touched.price_per_m2}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.price_per_m2
												}
											/>
										</FormGroup>
									</div>
								</div>

								<div className='row g-4 mt-2 mx-auto'>
									<div className="col-md-6">
										<FormGroup id='exampleSizeTextarea' label='Catatan'>
											<Textarea name='note'
												value={formikAdd.values.note}
												isTouched={formikAdd.touched.note}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.note
												}
												placeholder='Catatan mengenai lahan' />
										</FormGroup>

									</div>
								</div>
							</div>
							{/* <div className='col-lg-6'>
								<div className='row g-4'>
									<FormGroup
										id='exampleTypesPlaceholder--$'
										label='Dicatat sebagai :'
										labelClassName='text-capitalize'>
										<Select
											// size='md'
											ariaLabel='Default select example'
											placeholder='-- Pilih Catatan --'
											// onChange={(v) => setVcatatan(v)}
											// value={vCatatan}
											list={SELECT_OPTIONS_CATATAN}
										/>
									</FormGroup>
								</div>
								<div className='row g-4 mt-2'>
									<TipeBayar />
								</div>
							</div> */}
						</div>
						<ModalFooter>
							<Button
								color='info'
								isOutline
								className='border-0'
								onClick={() => setAddLahanModal(false)}>
								Close
							</Button>
							<Button type='submit' color='info' icon='Save'>
								Tambah Lahan
							</Button>
						</ModalFooter>
					</form>
				</ModalBody>
			</Modal>

			{/* Modal Edit Lahan */}
			<Modal
				isOpen={editModalLahan}
				setIsOpen={setEditModalLahan}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='xl'
				fullScreen='xl'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Edit Data Lahan
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<form>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='row g-4'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Nama Tanah'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='text'
												placeholder='Masukkan Nama Tanah'
												aria-label='.form-control-lg example'
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Untuk Cluster/Proyek'
											labelClassName='text-capitalize'>
											<Select
												// size='md'
												ariaLabel='Default select example'
												placeholder='-- Pilih Perumahan --'
												// onChange={formikOneWay.handleChange}
												// value={formikOneWay.values.exampleSelectOneWay}
												list={SELECT_OPTIONS_CLUSTER}
											/>
										</FormGroup>
									</div>
								</div>

								<div className='row g-4 mt-2'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Tanggal Perolehan'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='date'
												placeholder='Tanggal Perolehan Lahan'
												aria-label='.form-control-lg example'
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='No. Hp Tuan Tanah'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='tel'
												placeholder='+1 (999) 999-9999'
												autoComplete='tel'
												mask='+1 (999) 999-9999'
											/>
										</FormGroup>
									</div>
								</div>

								<div className='row g-4 mt-2'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--'
											label='Luas Area'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='number'
												placeholder='Luas Area Tanah'
												aria-label='.form-control-lg example'
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Harga per m^2'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='number'
												placeholder='Harga tanah per m^2'
											/>
										</FormGroup>
									</div>
								</div>

								<div className='row g-4 mt-2'>
									<FormGroup id='exampleSizeTextarea' label='Catatan'>
										<Textarea placeholder='Catatan mengenai lahan' />
									</FormGroup>
								</div>
							</div>
							<div className='col-lg-6'>
								<div className='row g-4'>
									<FormGroup
										id='exampleTypesPlaceholder--$'
										label='Dicatat sebagai :'
										labelClassName='text-capitalize'>
										<Select
											// size='md'
											ariaLabel='Default select example'
											placeholder='-- Pilih Catatan --'
											// onChange={handleChangeCatatan}
											// value={formikOneWay.values.exampleSelectOneWay}
											list={SELECT_OPTIONS_CATATAN}
										/>
									</FormGroup>
								</div>
								<div className='row g-4 mt-2'>
									<TipeBayar />
								</div>
							</div>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button
						color='info'
						isOutline
						className='border-0'
						onClick={() => setEditModalLahan(false)}>
						Close
					</Button>
					<Button color='info' icon='Save'>
						Update Lahan
					</Button>
				</ModalFooter>
			</Modal>

			{/* Modal Hapus Lahan */}
			<Modal
				isOpen={modalHapusLahan}
				setIsOpen={setModalHapusLahan}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='sm'
				fullScreen='sm'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Hapus Lahan ?
					</ModalTitle>
				</ModalHeader>

				<ModalFooter>
					<Button
						color='info'
						isOutline
						className='border-0'
						onClick={() => setModalHapusLahan(false)}>
						Close
					</Button>
					<Button color='danger' icon='Delete'>
						Hapus
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default CommonLahan;
