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
import data from '../data/dummyEventsData';
import USERS from '../data/userDummyData';
import PaginationButtons, { dataPagination, PER_COUNT } from '../../components/PaginationButtons';
import useSortableData from '../../hooks/useSortableData';
import useDarkMode from '../../hooks/useDarkMode';
import Select from '@call-components/bootstrap/forms/Select';
import InputGroup, { InputGroupText } from '@call-components/bootstrap/forms/InputGroup';
import CommonItem from '@call-common/partial/item/CommonItem';
import { GetItem } from '@call-root-lib/services/RabServices/RabService';
import { ItemDelete, ItemStore } from '@call-root-lib/services/RabServices/item/ItemService';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

interface IDataLahanProps {
    isFluid?: boolean;
}

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



const CommonRabItem: FC<IDataLahanProps> = ({ isFluid }) => {
    const { themeStatus, darkModeStatus } = useDarkMode();

    const SELECT_TYPE_MODEL = [
        { value: 1, text: 'Kapling' },
        { value: 2, text: 'Fasum' },
        { value: 3, text: 'Fasos' },
    ];

    const SELECT_OPTIONS_CLUSTER = [
        { value: 'Cluster Contoh 1', text: 'Cluster Contoh 1' },
        { value: 'Cluster Contoh 2', text: 'Cluster Contoh 2' },
        { value: 'Cluster Contoh 3', text: 'Cluster Contoh 3' },
    ];

    const [headerCloseStatus, setHeaderCloseStatus] = useState(true);
    const [state, setState] = useState(false);
    const [showTipeBayar, setShowTipeBayar] = useState(false);

    const [upcomingEventsEditOffcanvas, setUpcomingEventsEditOffcanvas] = useState(false);

	const [getId, setGetId] = useState<string>('')
    const [modalHapusRab, setModalHapusRab] = useState(false);
    const handleModalHapus = (id: string) => {
        setGetId(id)
        setModalHapusRab(!modalHapusRab);
        
    };
    const handleDeleteItem = async (id: string) => {
        const isDelete = await ItemDelete(id);
        console.log(isDelete);
        if (isDelete.status === 200) {
            AlertProses({ status: 'hapus' })
            setDataChange(!dataChange)
            setModalHapusRab(false)
        } else {
            return ''
        }
    }

    const [addRabModal, setRabModal] = useState(false);
    const [editRabModal, setEditRabModal] = useState(false);
    const handleEditRab = () => {
        setEditRabModal(!upcomingEventsEditOffcanvas);
    };



    const handleAddItem = (val: any) => {
        val.preventDefault();
        formikAdd.handleSubmit(val)
    }

    // END :: Upcoming Events

    const formikAdd = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
        },
        validate: (values) => {
            const errors: {
                name?: string;
            } = {};

            if (!values.name) {
                errors.name = 'Required';
            }

            return errors
        },
        validateOnChange: false,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            // setShowToast(true)
            const isStored = await ItemStore(values);
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


    const [dataChange, setDataChange] = useState(false)
    const [dataItem, setDataItem] = useState<any>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(PER_COUNT['5']);
    const { items, requestSort, getClassNamesFor } = useSortableData(dataItem);

    const getItem = async () => {
        try {
            setState(false)
            const res = await GetItem();
            // console.log(res.status);
            if (res.status == 200) {
                const response = res.data
                console.log(response);
                setDataItem(response.data)
                setDataChange(!dataChange)
            }
            else {
                setDataItem([])
            }
            setState(true)
        } catch (error) {
            console.log(error)
            setState(false)
        }
    }

    useEffect(() => {
        getItem()
    }, [dataChange])

    return (
        <>
            <Card stretch={isFluid}>
                <CardHeader borderSize={1}>
                    <CardLabel icon='Money' iconColor='success'>
                        <CardTitle>Data RAB Item</CardTitle>
                    </CardLabel>
                    <CardActions>
                        <Button
                            color='primary'
                            icon='Add'
                            isLight
                            onClick={() => {
                                setRabModal(true);
                            }}>
                            Tambah Item
                        </Button>
                    </CardActions>
                </CardHeader>
                <CardBody className='table-responsive' isScrollable={isFluid}>
                    <table className='table table-modern'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th >Nama Item</th>
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
                                <td style={{ width: 30 }} />

                                <td />
                            </tr>
                        </thead>
                        <tbody>
                            {dataPagination(items, currentPage, perPage).map((item, index) => (
                                <tr key={index}>
                                    <td>{++index}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <div className='flex-grow-1 ms-3 d-flex align-items-center text-nowrap'>
                                                {item.name}
                                            </div>
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
                // size='sm'
                // fullScreen='xxl'
                isAnimation={false}>
                <ModalHeader>
                    <ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
                        Tambah Item
                    </ModalTitle>
                </ModalHeader>
                {/* Form */}
                <ModalBody>
                    <form onSubmit={handleAddItem}>
                        <div className='row'>
                            <div >
                                <FormGroup
                                    id='exampleTypesPlaceholder--$'
                                    label='Nama Item'
                                    labelClassName='text-capitalize'>
                                    <Input
                                        // size='md'
                                        type='text'
                                        placeholder=''
                                        aria-label='.form-control-lg example'
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
                        </div>
                        <ModalFooter>
                            <Button
                                color='info'
                                isOutline
                                className='border-0'
                                onClick={() => setRabModal(false)}>
                                Close
                            </Button>
                            <Button color='info' icon='Save'>
                                Simpan
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>

            </Modal>

            {/* Modal Edit RAB */}
            <Modal
                isOpen={editRabModal}
                setIsOpen={setEditRabModal}
                titleId='exampleModalLabel'
                // isStaticBackdrop={staticBackdropStatus}
                isScrollable={true}
                isCentered={true}
                // size='xl'
                // fullScreen='xxl'
                isAnimation={false}>
                <ModalHeader>
                    <ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
                        Edit Item
                    </ModalTitle>
                </ModalHeader>
                {/* Form */}
                <ModalBody>
                    <form>
                        <div className='row'>
                            <div>
                                <FormGroup
                                    id='exampleTypesPlaceholder--$'
                                    label='Judul'
                                    labelClassName='text-capitalize'>
                                    <Input
                                        // size='md'
                                        type='text'
                                        placeholder=''
                                        aria-label='.form-control-lg example'
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
                        onClick={() => setEditRabModal(false)}>
                        Close
                    </Button>
                    <Button color='info' icon='Save'>
                        Simpan
                    </Button>
                </ModalFooter>
            </Modal>

            {/* Modal Hapus RAB */}
            <Modal
                isOpen={modalHapusRab}
                setIsOpen={setModalHapusRab}
                titleId='exampleModalLabel'
                // isStaticBackdrop={staticBackdropStatus}
                isScrollable={true}
                isCentered={true}
                isAnimation={false}>
                <ModalHeader>
                    <ModalTitle id='exampleModalLabel' tag='h2' className='m-3'>
                        Hapus Item
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
                    <Button onClick={() => handleDeleteItem(getId)} color='danger' icon='Delete'>
                        Hapus
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default CommonRabItem;
