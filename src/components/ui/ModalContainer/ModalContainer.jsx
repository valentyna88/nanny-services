import Modal from 'react-modal';
import clsx from 'clsx';
import css from './ModalContainer.module.css';

Modal.setAppElement('#root');

const ModalContainer = ({ isOpen = false, onClose, children, className }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={clsx(css.modal, className)}
    >
      <button type="button" onClick={onClose} className={css.closeBtn}>
        ✖️
      </button>
      {children}
    </Modal>
  );
};

export default ModalContainer;
