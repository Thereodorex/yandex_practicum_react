import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './modalOverlay';
import styles from './styles.module.css';

const modalRoot = document.getElementById("react-modals");

const Modal = ({ children, title, onClose }) => {
  return ReactDOM.createPortal((
    <ModalOverlay onClose={onClose}>
      <div onClick={e => e.stopPropagation()} className={`${styles.modal} p-10`}>
        <header className={`${styles.header}`}>
          <div className="text text_type_main-large">{title}</div>
          <div><CloseIcon onClick={onClose} type="primary" /></div>
        </header>
        {children}
      </div>
    </ModalOverlay>
  ), modalRoot);
}

ModalOverlay .propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};

export default Modal;