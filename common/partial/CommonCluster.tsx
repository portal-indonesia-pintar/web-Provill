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
	CardSubTitle,
} from '../../components/bootstrap/Card';
import Button from '../../components/bootstrap/Button';
import { priceFormat } from '../../helpers/helpers';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Icon from '../../components/icon/Icon';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../components/bootstrap/OffCanvas';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '@call-components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import Textarea from '../../components/bootstrap/forms/Textarea';
import Checks from '../../components/bootstrap/forms/Checks';
import Popovers from '../../components/bootstrap/Popovers';
import data from '../data/dummyEventsData';
import USERS from '../data/userDummyData';
import EVENT_STATUS from '../data/enumEventStatus';
import Avatar from '../../components/Avatar';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
import Select from '@call-components/bootstrap/forms/Select';
import { ClusterDelete, ClusterGet, ClusterStore } from '@call-root-lib/services/ClusterServices/ClusterService';
import Spinner from '@call-components/bootstrap/Spinner';
import { LahanGet } from '@call-root-lib/services/LandServices/LandService';
import validate from '@call-common/function/validation/editPagesValidate';
import { setTimeout } from 'timers/promises';
import Option from '@call-components/bootstrap/Option';
import { SELECT_KOTA, SELECT_PROVINSI } from '@call-common/type/helper';
import { FiberManualRecord } from '@call-components/icon/material-icons';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

interface IDataLahanProps {
	isFluid?: boolean;
}

interface IAlertProsesProps {
	isProses?: boolean;
	status?: string;
}

const AlertProses = ({ status }: IAlertProsesProps) => {
	const alertOptions: any = {
		icon: 'success',
		title: `Berhasil ${status}`,
		message: `Data cluster telah di ${status === 'add' ? 'Tambah' : (status === 'update') ? 'Update' : (status === 'hapus') ? 'Hapus' : ''}`,
	};

	withReactContent(Swal).fire({
		icon: alertOptions.icon,
		title: alertOptions.title,
		text: alertOptions.message,
	})


};

const CommonCluster: FC<IDataLahanProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	// data form
	const [dataChange, setDataChange] = useState(false)


	const SELECT_OPTIONS_CATATAN = [
		{ value: 'Belum', text: 'Pembelian Laham Baru (Belum dicatat pada Persediaan Tanah' },
		{ value: 'Sudah', text: 'Sebelumnya sudah dibeli (Sudah dicatat Persediaan Tanah' },
	];

	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);
	const [state, setState] = useState<Boolean>(false);
	const [showTipeBayar, setShowTipeBayar] = useState(false);


	// BEGIN :: Upcoming Events
	const [editClusterModal, setEditClusterModal] = useState(false);
	const handleEditLahan = () => {
		setEditClusterModal(!editClusterModal);
	};

	const [modalHapusCluster, setModalHapusCluster] = useState(false);
	const [getId, setGetId] = useState<string>('')
	const handleModalHapus = (id: string) => {
		setGetId(id)
		setModalHapusCluster(!modalHapusCluster);
	};

	const handleDeleteCluster = async (id: string) => {
		const isDelete = await ClusterDelete(id);
		console.log(isDelete	);
		if (isDelete.code === '200') {
			AlertProses({ status: 'hapus' })
			setDataChange(!dataChange)
			setModalHapusCluster(false)
		} else {
			return ''
		}
	}

	const [addClusterModal, setAddClusterModal] = useState(false);
	// END :: Upcoming Events
	const submitForm = (val: any) => {
		val.preventDefault();
		formikCreate.handleSubmit(val)
	}

	const formikCreate = useFormik({
		enableReinitialize: true,
		initialValues: {
			land_id: '',
			name: '',
			province: '',
			city: '',
			subdistrict: '',
			village: '',
			phone_number: '',
			total_land_area: 0,
			siteplan: '',
			address: '',
			notify: true,
		},
		validate: (values) => {
			const errors: {
				land_id?: string;
				name?: string;
				province?: string;
				city?: string,
				subdistrict?: string,
				village?: string,
				phone_number?: string | number;
				total_land_area?: string | number,
				siteplan?: string,
				address?: string,
			} = {};

			if (!values.land_id) {
				errors.land_id = 'Required';
			}
			if (!values.name) {
				errors.name = 'Required';
			}
			if (!values.province) {
				errors.province = 'Required';
			}
			if (!values.city) {
				errors.city = 'Required';
			}
			if (!values.subdistrict) {
				errors.subdistrict = 'Required';
			}
			if (!values.village) {
				errors.village = 'Required';
			}
			if (!values.phone_number) {
				errors.phone_number = 'Required';
			} else if (values.phone_number.length <= 11) {
				errors.phone_number = 'Nomor HP minimal 11 characters';
			}
			if (!values.total_land_area) {
				errors.total_land_area = 'Required';
			}
			if (!values.siteplan) {
				errors.siteplan = 'Required';
			}
			if (!values.address) {
				errors.address = 'Required';
			}

			return errors
		},

		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {

			const isStored = await ClusterStore(values);
			console.log(isStored);
			if (isStored?.status === 200) {
				resetForm();
				setDataChange(!dataChange)
				AlertProses({ status: 'add' })
			} else {
				return false
			}
		},
	});



	// get data lahan
	const [dataCluster, setDataCluster] = useState<any>([])
	// console.log(dataCluster);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	// const { items, requestSort, getClassNamesFor } = useSortableData(USERS);
	const { items, requestSort, getClassNamesFor } = useSortableData(dataCluster);

	const getCluster = async () => {
		try {
			const res = await ClusterGet();
			// const status = res.response.status
			console.log(res === 'UNKNOWN');
			if (res === 'UNKNOWN') {
				setState(true)
				return setDataCluster([])
			}
			else {
				setState(true)
				return setDataCluster(res.data)
			}
		} catch (error) {

			console.log(error)
			setState(false)
		}
	}


	const [dataLahan, setDataLahan] = useState<any>([])
	const getLahan = async () => {
		const data: any[] = []
		try {
			const res = await LahanGet();
			res.data.data.forEach((i: any) => {
				data.push({
					value: i.uuid,
					text: i.land_name
				})
			})
			setDataLahan(data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getLahan()
	}, [])

	useEffect(() => {
		getCluster();
	}, [dataChange])

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Alarm' iconColor='info'>
						<CardTitle>Data Cluster</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							color='primary'
							icon='Add'
							isLight
							onClick={() => {
								setAddClusterModal(true);
							}}>
							Tambah Cluster
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
										<th>Nama Lahan</th>
										<th>Cluster</th>
										<th>Provinsi</th>
										<th>Kota</th>
										<th>Kecamatan</th>
										<th>Kelurahan</th>
										<th>Alamat</th>
										<th>Luas lahan</th>
										<th>Lokasi denah</th>
										{/* <th>Status</th> */}
										<td style={{ width: 60 }} />

										<td />
									</tr>
								</thead>
								<tbody>
									{dataCluster.length > 0 ? (
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
													<td className='text-nowrap'>{item.price_per_m2}</td>
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
															// onClick={() => handleEditC(item.uuid)}
															>
																Edit
															</Button>

															<Button
																isOutline={!darkModeStatus}
																color='danger'
																isLight={darkModeStatus}
																className={classNames('text-nowrap', {
																	'border-light': !darkModeStatus,
																})}
																icon='Delete'
																onClick={() => { handleModalHapus(item.uuid) }}>
																Hapus
															</Button>
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
				) : (
					<div className="m-5 text-center">
						<Spinner size={50} color='primary' />
					</div>
				)}
			</Card>

			{/* Modal Add Cluster */}
			<Modal
				isOpen={addClusterModal}
				setIsOpen={setAddClusterModal}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='lg'
				fullScreen='lg'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Tambah Cluster
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<form onSubmit={submitForm}>
						<div className="row g-4">
							<FormGroup
								id='exampleTypesPlaceholder--$'
								label='Nama Cluster'
								aria-label='.form-control-lg example'
								labelClassName='text-capitalize' className='mb-4'>
								<Input
									type='text'
									placeholder='nama cluster'
									name='name'
									value={formikCreate.values.name}
									isTouched={formikCreate.touched.name}
									onChange={formikCreate.handleChange}
									onBlur={formikCreate.handleBlur}
									invalidFeedback={formikCreate.errors.name}
								/>
							</FormGroup>
						</div>
						<div className='row g-4 '>
							<div className='col-lg-6'>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Nama Lahan'
									labelClassName='text-capitalize'
									className='mb-4'>
									<Select ariaLabel='Default select example'
										placeholder='-- Pilih Tanah --'
										name='land_id'
										value={formikCreate.values.land_id}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.land_id}
										invalidFeedback={formikCreate.errors.land_id}>
										{
											dataLahan.map((i: any) => (
												<Option key={i.value} value={i.value}>
													{i.text}
												</Option>
											))
										}
									</Select>
								</FormGroup>
							</div>
							<div className='col-lg-6'>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='No. Hp'
									labelClassName='text-capitalize' className='mb-4'>
									<Input
										type='tel'
										placeholder='089-999-9999-9999'
										autoComplete='tel'
										mask='089-999-9999-9999'
										name='phone_number'
										value={formikCreate.values.phone_number}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.phone_number}
										invalidFeedback={formikCreate.errors.phone_number}
									/>
								</FormGroup>
							</div>

						</div>

						<div className="row g-4 ">
							<div className="col-lg-6">
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Total luas tanah'
									labelClassName='text-capitalize'>
									<Input
										type='number'
										placeholder='Luas tanah total (m2)'
										name='total_land_area'
										value={formikCreate.values.total_land_area}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.total_land_area}
										invalidFeedback={formikCreate.errors.total_land_area}
									/>
								</FormGroup>
							</div>
							<div className="col-lg-6">
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Provinsi'
									labelClassName='text-capitalize'>
									<Select
										ariaLabel='Default select example'
										placeholder='-- Pilih Provinsi --'
										name='province'
										value={formikCreate.values.province}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.province}
										invalidFeedback={formikCreate.errors.province}
										list={SELECT_PROVINSI}
									/>
								</FormGroup>
							</div>
						</div>

						<div className="row g-4 mt-1">
							<div className="col-lg-6">
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Lokasi tanah'
									labelClassName='text-capitalize'>
									<Input
										type='text'
										placeholder='lokasi tanah cluster'
										name='siteplan'
										value={formikCreate.values.siteplan}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.siteplan}
										invalidFeedback={formikCreate.errors.siteplan}
									/>
								</FormGroup>
							</div>
							<div className="col-lg-6">
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Kota :'
									labelClassName='text-capitalize'>
									<Select
										ariaLabel='Default select example'
										placeholder='-- Pilih Kota --'
										name='city'
										value={formikCreate.values.city}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.city}
										invalidFeedback={formikCreate.errors.city}
										list={SELECT_KOTA}
									/>
								</FormGroup>

							</div>
						</div>

						<div className="row g-4 mt-1">
							<div className="col-lg-6">
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Kecamatan'
									labelClassName='text-capitalize'>
									<Input
										type='text'
										placeholder='kecamatan'
										name='subdistrict'
										value={formikCreate.values.subdistrict}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.subdistrict}
										invalidFeedback={formikCreate.errors.subdistrict}
									/>
								</FormGroup>
							</div>
							<div className="col-lg-6">
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Kelurahan'
									labelClassName='text-capitalize'>
									<Input
										type='text'
										placeholder='kelurahan'
										name='village'
										value={formikCreate.values.village}
										onChange={formikCreate.handleChange}
										onBlur={formikCreate.handleBlur}
										isTouched={formikCreate.touched.village}
										invalidFeedback={formikCreate.errors.village}
									/>
								</FormGroup>

							</div>
						</div>

						<div className="row g-4 mt-1">
							<FormGroup
								id='exampleTypesPlaceholder--$'
								label='Alamat'
								labelClassName='text-capitalize'>
								<Input
									type='text'
									placeholder='alamat lengkap'
									name='address'
									value={formikCreate.values.address}
									onChange={formikCreate.handleChange}
									onBlur={formikCreate.handleBlur}
									isTouched={formikCreate.touched.address}
									invalidFeedback={formikCreate.errors.address}
								/>
							</FormGroup>
						</div>
						<ModalFooter>
							<Button
								color='info'
								isOutline
								className='border-0'
								onClick={() => {
									setAddClusterModal(false)
									formikCreate.resetForm()
								}}>
								Close
							</Button>
							<Button type='submit' color='info' icon='Save'>
								Tambah Cluster
							</Button>
						</ModalFooter>
					</form>
				</ModalBody>
			</Modal>

			{/* Modal Edit Cluster */}
			<Modal
				isOpen={editClusterModal}
				setIsOpen={setEditClusterModal}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='lg'
				fullScreen='lg'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Edit Cluster
					</ModalTitle>
				</ModalHeader>
				<ModalBody>
					<form>
						<div className='row'>
							<div className='col-lg-6'>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Nama Lahan'
									labelClassName='text-capitalize'>
									{/* <Input
										// size='md'
										type='text'
										placeholder='Masukkan Nama Lahan'
										aria-label='.form-control-lg example'
									/> */}
									{/* <Select
										// size='md'
										ariaLabel='Default select example'
										placeholder='-- Pilih Tanah --'
										// onChange={(v) => setVcatatan(v)}
										// value={vCatatan}
										list={dataLahan}
									/> */}
									<Select ariaLabel='Default select example' placeholder='-- Pilih Tanah --'>
										{
											// dataLahan.map((v: any) => {
											// 	console.log(v);
											// 	<option>tes</option>
											// })
										}
									</Select>
								</FormGroup>

								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Luas total tanah'
									labelClassName='text-capitalize'>
									<Input
										// size='md'
										type='number'
										placeholder='Luas tanah total (m2)'
									/>
								</FormGroup>

								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Lokasi tanah'
									labelClassName='text-capitalize'>
									<Input
										// size='md'
										type='text'
										placeholder='lokasi tanah cluster'
									/>
								</FormGroup>

								<FormGroup id='exampleSizeTextarea' label='Alamat lengkap'>
									<Textarea placeholder='alamat' />
								</FormGroup>

							</div>
							<div className='col-lg-6'>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='No. Hp'
									labelClassName='text-capitalize'>
									<Input
										// size='md'
										type='tel'
										placeholder='+62-999-9999-9999'
										autoComplete='tel'
										mask='+62-999-9999-9999'
									/>
								</FormGroup>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Provinsi :'
									labelClassName='text-capitalize'>
									<Select
										// size='md'
										ariaLabel='Default select example'
										placeholder='-- Pilih Provinsi --'
										// onChange={(v) => setVcatatan(v)}
										// value={vCatatan}
										list={SELECT_OPTIONS_CATATAN}
									/>
								</FormGroup>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Kota :'
									labelClassName='text-capitalize'>
									<Select
										// size='md'
										ariaLabel='Default select example'
										placeholder='-- Pilih Kota --'
										// onChange={(v) => setVcatatan(v)}
										// value={vCatatan}
										list={SELECT_OPTIONS_CATATAN}
									/>
								</FormGroup>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Kecamatan'
									labelClassName='text-capitalize'>
									<Input
										// size='md'
										type='text'
										placeholder='kecamatan'
									/>
								</FormGroup>

								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Kelurahan'
									labelClassName='text-capitalize'>
									<Input
										// size='md'
										type='text'
										placeholder='kelurahan'
									/>
								</FormGroup>

							</div>
						</div>
					</form>
				</ModalBody>
				<ModalFooter>
					<Button
						color='info'
						isOutline
						className='border-0'
						onClick={() => setEditClusterModal(false)}>
						Close
					</Button>
					<Button color='info' icon='Save'>
						Update Cluster
					</Button>
				</ModalFooter>
			</Modal>

			{/* Modal Hapus Cluster */}
			<Modal
				isOpen={modalHapusCluster}
				setIsOpen={setModalHapusCluster}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='sm'
				fullScreen='sm'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Hapus Cluster ?
					</ModalTitle>
				</ModalHeader>

				<ModalFooter>
					<Button
						color='info'
						isOutline
						className='border-0'
						onClick={() => {
							setModalHapusCluster(false)
							setGetId('')
						}
						}>
						Close
					</Button>
					<Button onClick={() => handleDeleteCluster(getId)} color='danger' icon='Delete'>
						Hapus
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default CommonCluster;
