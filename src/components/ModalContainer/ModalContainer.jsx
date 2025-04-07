import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/slice';
import Modal from 'react-modal';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import css from './ModalContainer.module.css';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modalType = useSelector(state => state.modal.modalType);
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
      {modalType === 'appointment' && <AppointmentForm />}
    </Modal>
  );
};

export default ModalContainer;
