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
import TipeBayar from '@call-components/lahan/TipeBayar';
import Option from '@call-components/bootstrap/Option';
import { ClusterGet } from '@call-root-lib/services/ClusterServices/ClusterService';
import Spinner from '@call-components/bootstrap/Spinner';
import { LahanGet } from '@call-root-lib/services/LandServices/LandService';
import validate from '@call-common/function/validation/editPagesValidate';
import { setTimeout } from 'timers/promises';

interface IDataLahanProps {
	isFluid?: boolean;
}
const CommonCluster: FC<IDataLahanProps> = ({ isFluid }) => {
	const { themeStatus, darkModeStatus } = useDarkMode();

	// data form
	const [vCatatan, setVcatatan] = useState('tes');
	const [dataChange, setDataChange] = useState(false)

	console.log(vCatatan);

	const SELECT_OPTIONS_CATATAN = [
		{ value: 'Belum', text: 'Pembelian Laham Baru (Belum dicatat pada Persediaan Tanah' },
		{ value: 'Sudah', text: 'Sebelumnya sudah dibeli (Sudah dicatat Persediaan Tanah' },
	];

	const SELECT_OPTIONS_CLUSTER = [
		{ value: 'Cluster 1', text: 'Cluster 1' },
		{ value: 'Cluster 2', text: 'Cluster 2' },
		{ value: 'Cluster 3', text: 'Cluster 3' },
	];

	const [headerCloseStatus, setHeaderCloseStatus] = useState(true);
	const [state, setState] = useState(false);
	const [showTipeBayar, setShowTipeBayar] = useState(false);


	// BEGIN :: Upcoming Events
	const [editClusterModal, setEditClusterModal] = useState(false);
	const handleEditLahan = () => {
		setEditClusterModal(!editClusterModal);
	};

	const [modalHapusCluster, setModalHapusCluster] = useState(false);
	const handleModalHapus = () => {
		setModalHapusCluster(!modalHapusCluster);
	};

	const [addClusterModal, setAddClusterModal] = useState(false);
	// END :: Upcoming Events

	const createCluster = useFormik({
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
			notify: true,
		},

		validateOnChange: false,
		onSubmit: () => {
			console.log('');
			return undefined;
		},
	});



	// get data lahan
	const [dataCluster, setDataCluster] = useState<any>([])
	console.log(dataCluster);
	const [currentPage, setCurrentPage] = useState(1);
	const [perPage, setPerPage] = useState(PER_COUNT['5']);
	const { items, requestSort, getClassNamesFor } = useSortableData(data);

	const getCluster = async () => {
		try {
			setState(false)
			const res = await ClusterGet();
			setDataCluster(res.data)
			setState(true)
		} catch (error) {
			console.log(error)
			setState(false)
		}
	}

	const [dataLahan, setDataLahan] = useState<any>([])
	const getLahan = async () => {
		try {
			setState(false)
			const res = await LahanGet();
			setDataLahan(res.data)
			// setDataLahan(res.data.map(v => {
			// 	value : v.uuid,
			// 	text: v.uuid
			// }))
			setState(true)
		} catch (error) {
			console.log(error)
			setState(false)
		}
	}

	useEffect(() => {
		getLahan()
		// getCluster();
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

						<div className="m-5 text-center">
							<Spinner size={50} color='primary' />
						</div>
					</>
				) : (
					<div className="m-5 text-center">
						<Spinner size={50} color='primary' />
					</div>
				)}
				<PaginationButtons
					data={items}
					label='items'
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					perPage={perPage}
					setPerPage={setPerPage}
				/>
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
											dataLahan.map((v: any) => {
												console.log(v);
												// <Option value={v.uuid}>tes</Option>
												<option>tes</option>
											})
										}
										{/* <Option>Tes</Option> */}
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
						onClick={() => setAddClusterModal(false)}>
						Close
					</Button>
					<Button color='info' icon='Save'>
						Tambah Cluster
					</Button>
				</ModalFooter>
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
											dataLahan.map((v: any) => {
												console.log(v);
												// <Option value={v.uuid}>tes</Option>
												<option>tes</option>
											})
										}
										{/* <Option>Tes</Option> */}
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
						onClick={() => setModalHapusCluster(false)}>
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

export default CommonCluster;
