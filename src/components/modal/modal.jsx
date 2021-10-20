import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './modalOverlay';
import styles from './styles.module.css';

const modalRoot = document.getElementById("react-modals");

const Modal = ({ children, title, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  }, [])

  const handleEsc = e => {
    e.preventDefault();
    if(e.key === "Escape") {
      onClose();
    }
  }

  return ReactDOM.createPortal((
    <ModalOverlay onClose={onClose}>
      <div ref={modalRef} tabIndex="0" onKeyDown={handleEsc} onClick={e => e.stopPropagation()} className={`${styles.modal} p-10`}>
        <header className={`${styles.header}`}>
          <div className="text text_type_main-large">{title}</div>
          <div><CloseIcon onClick={onClose} type="primary" /></div>
        </header>
        {children}
      </div>
    </ModalOverlay>
  ), modalRoot);
}

Modal .propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};

export default Modal;