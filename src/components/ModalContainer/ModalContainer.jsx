import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import Modal from 'react-modal';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import css from './ModalContainer.module.css';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(state => state.modal.modalType);
  const nanny = useSelector(state => state.modal.nanny);

  return (
    <Modal
      isOpen={!!modalType}
      onRequestClose={() => dispatch(closeModal())}
      contentLabel="Modal"
      overlayClassName={css.overlay}
      className={css.modal}
    >
      {modalType === 'login' && <LoginForm />}
      {modalType === 'register' && <RegistrationForm />}
      {modalType === 'appointment' && <AppointmentForm nanny={nanny} />}
    </Modal>
  );
};

export default ModalContainer;
