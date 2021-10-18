import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css'

const ModalOverlay = ({ children, onClose }) => {
  const overlayRef = useRef();

  useEffect(() => {
    overlayRef.current.focus();
  }, [])

  const handleEsc = e => {
    e.preventDefault();
    if(e.key === "Escape") {
      onClose();
    }
  }
  return (
    <div ref={overlayRef} className={styles.modal_overlay} onClick={onClose} onKeyDown={handleEsc} tabIndex="0">
        {children}
    </div>
  );
};

ModalOverlay .propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};


export default ModalOverlay;