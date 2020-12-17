import React from 'react';
import { Alert } from 'reactstrap';

const InfoToast = ({ text, onClose, show }) => {

  setTimeout(() => onClose(), 3000);

  return (
    <div className="toast-dialog-container">
      <Alert color="warning" isOpen={show}>
        { text }
      </Alert>
    </div>
  );
};

export default InfoToast;
