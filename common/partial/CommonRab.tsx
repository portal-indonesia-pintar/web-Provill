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
import { priceFormat } from '../../helpers/helpers';
import Modal, {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalTitle,
} from '@call-components/bootstrap/Modal';
import FormGroup from '../../components/bootstrap/forms/FormGroup';
import Input from '../../components/bootstrap/forms/Input';
import USERS from '../data/userDummyData';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
import CommonItem from '@call-common/partial/item/CommonItem';
import { RabGet } from '@call-root-lib/services/RabServices/RabService';
import { v4 as uuidv4 } from 'uuid';

interface IDataLahanProps {
	isFluid?: boolean;
}

interface formItem {
	id: string;
	rab_item_id: string;
	rab_unit_id: string;
	quantity: number;
	price: number;
	increase_percentage: number;
	total_price_rab: number;
	total_price_rap: number;
}

const CommonRab: FC<IDataLahanProps> = ({ isFluid }) => {
	const { darkModeStatus } = useDarkMode();

	// tambah item
	const [formItem, setFormItem] = useState<formItem[]>([]);
	const tambahItem = () => {
		const newItem = {
			id: uuidv4(),
			rab_item_id: '',
			rab_unit_id: '',
			quantity: 0,
			price: 0,
			increase_percentage: 0,
			total_price_rab: 0,
			total_price_rap: 0,
		};
		setFormItem((prevItems) => [...prevItems, newItem]);
	};

	const hapusItem = (id: string) => {
		setFormItem(formItem.filter((item) => item.id !== id));
	};

	const handleItemChange = (id: string, field: string, value: any) => {
		setFormItem((prevItems) =>
			prevItems.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
		);
	};

	

	const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);

	const [modalHapusRab, setModalHapusRab] = useState(false);
	const handleModalHapus = () => {
		setModalHapusRab(!modalHapusRab);
	};

	const [addRabModal, setRabModal] = useState(false);
	const [editRabModal, setEditRabModal] = useState(false);
	const handleEditRab = () => {
		setEditRabModal(!upcomingEventsEditOffcanvas);
	};

	// END :: Upcoming Events

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: '',
		},
		validate: (values) => {
			const errors: {
				name?: string;
			} = {};

			if (!values.name) errors.name = 'Required';

			return errors;
		},
		validateOnChange: false,
		onSubmit<Values>(
			values: Values,
			formikHelpers: FormikHelpers<Values>,
		): void | Promise<any> {
			return undefined;
		},
	});

	const submitForm = (val: any) => {
		val.preventDefault();
		formik.handleSubmit(val);
	};

	// get data
	const [dataIsExist, setDataIsExist] = useState<boolean>(false);
	const [getRab, setGetRab] = useState<any>([]);
	const getData = async () => {
		try {
			const res = await RabGet();
			if (res.status == '404') {
				setDataIsExist(false);
				return;
			}
			setGetRab(res);
			setDataIsExist(true);
			return;
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items, requestSort, getClassNamesFor } = useSortableData(getRab);

	return (
		<>
			<Card stretch={isFluid}>
				<CardHeader borderSize={1}>
					<CardLabel icon='Money' iconColor='success'>
						<CardTitle>Data RAB & RAP</CardTitle>
					</CardLabel>
					<CardActions>
						<Button
							color='primary'
							icon='Add'
							isLight
							onClick={() => {
								setRabModal(true);
							}}>
							Tambah RAB & RAP
						</Button>
					</CardActions>
				</CardHeader>
				<CardBody className='table-responsive' isScrollable={isFluid}>
					<table className='table table-modern'>
						<thead>
							<tr>
								<th>No</th>
								<th className='text-center'>Nama</th>
								{/* <th className='text-nowrap'>Detail RAB</th> */}
								{/* <th
									onClick={() => requestSort('date')}
									className='cursor-pointer text-decoration-underline'>
									Tanggal{' '}
									<Icon
										size='lg'
										className={getClassNamesFor('date')}
										icon='FilterList'
									/>
								</th> */}
								{/* <th>Status</th> */}
								<td style={{ width: 60 }} />

								<td />
							</tr>
						</thead>
						<tbody>
							{dataIsExist ? (
								<>
									{dataPagination(items, currentPage, perPage).map((item) => (
										<tr key={item.id}>
											<td>{item.id}</td>
											<td>
												<div className='d-flex'>
													<div className='flex-grow-1 ms-3 d-flex align-items-center text-nowrap'>
														{item.name}
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													{/* <span
												className={classNames(
													'badge',
													'border border-2',
													[`border-${themeStatus}`],
													'rounded-circle',
													'bg-success',
													'p-2 me-2',
												)}>
												<span className='visually-hidden'>
													{item.status.name}
												</span>
											</span> */}
													<span className='text-nowrap'>
														{/* {dayjs(`${item.date} ${item.time}`).format(
													'D-MMMM-YYYY',
												)} */}
													</span>
												</div>
											</td>

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
														icon='Info'
														onClick={handleEditRab}>
														Detail
													</Button>

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
														onClick={handleEditRab}>
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
														onClick={handleModalHapus}>
														Hapus
													</Button>
												</div>
											</td>
										</tr>
									))}
								</>
							) : (
								<tr>
									<td className='text-center' colSpan={4}>
										Data tidak ada
									</td>
								</tr>
							)}
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
			</Card>

			{/* Modal Add RAB */}
			<Modal
				isOpen={addRabModal}
				setIsOpen={setRabModal}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='xl'
				fullScreen='xxl'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Tambah RAP & RAB
					</ModalTitle>
				</ModalHeader>
				{/* Form */}
				<ModalBody>
					<form onSubmit={submitForm}>
						<div className='row'>
							<div className='col-lg-6'>
								<FormGroup
									id='exampleTypesPlaceholder--$'
									label='Nama RAB'
									labelClassName='text-capitalize'>
									<Input
										size='lg'
										type='text'
										placeholder='Masukkan nama RAB/RAP'
										aria-label='.form-control-lg example'
										value={formik.values.name}
										isTouched={formik.touched.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										invalidFeedback={formik.errors.name}
									/>
								</FormGroup>
							</div>
						</div>

						<div className='text-center '>
							<ModalTitle id='exampleModalLabel' tag='h3' className=' mt-5'>
								Item RAP & RAB
							</ModalTitle>
							Silahkan masukkan poin-poin RAP & RAB
						</div>

						<div className='row'>
							<CommonItem
								formItem={formItem}
								handleItemChange={handleItemChange}
								hapusItem={hapusItem}
								tambahItem={tambahItem}
							/>
						</div>
						<ModalFooter>
							<Button
								color='info'
								isOutline
								className='border-0'
								onClick={() => setRabModal(false)}>
								Close
							</Button>
							<Button type='submit' color='info' icon='Save'>
								Simpan
							</Button>
						</ModalFooter>
					</form>
				</ModalBody>
			</Modal>

			{/* Modal Edit RAB */}

			{/* Modal Hapus RAB */}
			<Modal
				isOpen={modalHapusRab}
				setIsOpen={setModalHapusRab}
				titleId='exampleModalLabel'
				// isStaticBackdrop={staticBackdropStatus}
				isScrollable={true}
				isCentered={true}
				size='sm'
				fullScreen='sm'
				isAnimation={false}>
				<ModalHeader>
					<ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
						Hapus RAB & RAP ?
					</ModalTitle>
				</ModalHeader>

				<ModalFooter>
					<Button
						color='info'
						isOutline
						className='border-0'
						onClick={() => setModalHapusRab(false)}>
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

export default CommonRab;
