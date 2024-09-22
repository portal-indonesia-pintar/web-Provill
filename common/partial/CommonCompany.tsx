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
import { CompanyDelete, CompanyGet, CompanyShow, CompanyStore } from '@call-root-lib/services/CompanyServices/CompanyService';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import Spinner from '@call-components/bootstrap/Spinner';
import { toRupiah } from '../../helpers/helpers';
import { adminMenu } from '@call-root-lib/menu';
import TipeBayar from '@call-components/lahan/TipeBayar';




// alert proses data
interface IAlertProsesProps {
	isProses?: boolean;
	status?: string;
}

const AlertProses = ({ status }: IAlertProsesProps) => {
	const alertOptions: any = {
		icon: 'success',
		title: `Berhasil ${status}`,
		message: `Data Company telah di ${status === 'add' ? 'Tambah' : (status === 'update') ? 'Update' : (status === 'hapus') ? 'Hapus' : ''}`,
	};

	withReactContent(Swal).fire({
		icon: alertOptions.icon,
		title: alertOptions.title,
		text: alertOptions.message,
	})


};

interface IDataCompanyProps {
	isFluid?: boolean;
}
const CommonCompany: FC<IDataCompanyProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();
	const [dataChange, setDataChange] = useState(false)

	// data form

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
	const [editModalCompany, setEditModalCompany] = useState(false);
	const handleEditCompany = async (uuid: string) => {
		// console.log(uuid);
		const res = await CompanyShow(uuid)
		console.log(res);
		// setEditModalCompany(!editModalCompany);
	};

	// const handleChangeCatatan = (e) => {
	// 	setVcatatan(e.target.value);
	// };
	// END :: Upcoming Events

	// handle add Company form
	const [addCompanyModal, setAddCompanyModal] = useState(false);
	const handleAddCompany = (val: any) => {
		val.preventDefault();
		formikAdd.handleSubmit(val)
	}

	const formikAdd = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: '',
			address: '',
			notify: true,
		},
		validate: (values) => {
			const errors: {
				name?: string;
				address?: string;
			} = {};

			if (!values.name) {
				errors.name = 'Required';
			}
			if (!values.address) {
				errors.address = 'Required';
			}
			return errors
		},
		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {
			console.log(values);
			// setShowToast(true)
			const isStored = await CompanyStore(values);
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

	// get data Company
	const [dataCompany, setDataCompany] = useState<any>([])
	console.log(dataCompany);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items, requestSort, getClassNamesFor } = useSortableData(dataCompany);

	const getCompany = async () => {
		try {
			setState(false)
			const res = await CompanyGet();
			setDataCompany(res.data)
			setState(true)
		} catch (error) {
			console.log(error)
			setState(false)
		}
	}

	// delete company
	const [modalHapusCompany, setModalHapusCompany] = useState(false);
	const [getId, setGetId] = useState<string>('')
	const handleModalHapus = (id: string) => {
		setGetId(id)
		setModalHapusCompany(!modalHapusCompany);

	};
	const handleDeleteCompnay = async (id: string) => {
		console.log('id company :', id);
		const isDelete = await CompanyDelete(id);
		console.log(isDelete.code);
		if (isDelete.code === '200') {
			AlertProses({ status: 'hapus' })
			setDataChange(!dataChange)
			setModalHapusCompany(false)
		} else {
			return ''
		}
	}

	useEffect(() => {
		getCompany();
	}, [dataChange])

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Alarm' iconColor='info'>
						<CardTitle>Data {adminMenu.company.text}</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							color='primary'
							icon='Add'
							isLight
							onClick={() => {
								setAddCompanyModal(true);
								formikAdd.resetForm()
							}}>
							Tambah {adminMenu.company.text}
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

										<th>Nama</th>
										<th>Alamat</th>
										{/* <th>Status</th> */}
										<td style={{ width: 60 }} />

										<td />
									</tr>
								</thead>
								<tbody>
									{dataPagination(items, currentPage, perPage).map((item, index) => (
										<tr key={index}>
											<td>{++index}</td>
											<td>
												{item.name}
											</td>
											<td className='text-nowrap'>{item.address}</td>
											{/* <td>
											<Dropdown>
												<DropdownToggle hasIcon={false}>
													<Button
														isLink
														color={item.status.color}
														icon='Circle'
														className='text-nowrap'>
														{item.status.name}
													</Button>
												</DropdownToggle>
												<DropdownMenu>
													{Object.keys(EVENT_STATUS).map((key) => (
														<DropdownItem key={key}>
															<div>
																<Icon
																	icon='Circle'
																	color={EVENT_STATUS[key].color}
																/>
																{EVENT_STATUS[key].name}
															</div>
														</DropdownItem>
													))}
												</DropdownMenu>
											</Dropdown>
										</td> */}
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
														onClick={() => handleEditCompany(item.uuid)}>
														Edit
													</Button>

													<Button
														key={item.id}
														isOutline={!darkModeStatus}
														color='danger'
														isLight={darkModeStatus}
														className={classNames('text-nowrap', {
															'border-light': !darkModeStatus,
														})}
														icon='Delete'
														onClick={() => handleModalHapus(item.uuid)}>
														Hapus
													</Button>
												</div>
											</td>
										</tr>
									))}
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

			{/* Modal Add Company */}
			<Modal
				isOpen={addCompanyModal}
				setIsOpen={setAddCompanyModal}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='xl'
				fullScreen='sm'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Tambah Data Company
					</ModalTitle>
				</ModalHeader>
				<ModalBody >
					<form onSubmit={handleAddCompany}>
						<div className='row'>
							<div className='col-lg'>
								<div className='row g-4'>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Nama Perusahaan'
											labelClassName='text-capitalize'>
											<Input
												// size='md'
												type='text'
												placeholder='Masukkan Nama Perusahaan'
												name='name'
												value={formikAdd.values.name}
												isTouched={formikAdd.touched.name}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.name
												}
											/>
										</FormGroup>
									</div>
									<div className='col-6'>
										<FormGroup
											id='exampleTypesPlaceholder--$'
											label='Alamat Perusahaan'
											labelClassName='text-capitalize'>

											<Input
												// size='md'
												type='text'
												placeholder='Masukkan alamat Perusahaan'
												aria-label='.form-control-lg example'
												name='address'
												value={formikAdd.values.address}
												isTouched={formikAdd.touched.address}
												onChange={formikAdd.handleChange}
												onBlur={formikAdd.handleBlur}
												invalidFeedback={
													formikAdd.errors.address
												}
											/>
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
						<ModalFooter className='mt-5'>
							<Button
								color='info'
								isOutline
								className='border-0'
								onClick={() => setAddCompanyModal(false)}>
								Close
							</Button>
							<Button type='submit' color='info' icon='Save'>
								Tambah Company
							</Button>
						</ModalFooter>
					</form>
				</ModalBody>
			</Modal>

			{/* Modal Edit Company */}
			<Modal
				isOpen={editModalCompany}
				setIsOpen={setEditModalCompany}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='xl'
				fullScreen='xl'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Edit Data Company
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
												placeholder='Tanggal Perolehan Company'
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
										<Textarea placeholder='Catatan mengenai Company' />
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
						onClick={() => setEditModalCompany(false)}>
						Close
					</Button>
					<Button color='info' icon='Save'>
						Update Company
					</Button>
				</ModalFooter>
			</Modal>

			{/* Modal Hapus Company */}
			<Modal
				isOpen={modalHapusCompany}
				setIsOpen={setModalHapusCompany}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='sm'
				fullScreen='sm'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Hapus Company ?
					</ModalTitle>
				</ModalHeader>

				<ModalFooter>
					<Button
						color='info'
						isOutline
						className='border-0'
						onClick={() => {
							setGetId('')
							setModalHapusCompany(false)
						}
						}>
						Close
					</Button>
					<Button onClick={() => handleDeleteCompnay(getId)} color='danger' icon='Delete'>
						Hapus
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default CommonCompany;
