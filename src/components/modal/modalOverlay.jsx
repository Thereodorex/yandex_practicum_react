import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css'

const ModalOverlay = ({ children, onClose }) => {
  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      {children}
    </div>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element
};

export default ModalOverlay;