import React from 'react';
import {
  Button, Modal, ModalBody, ModalFooter,
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

export default class InfoDialog extends React.PureComponent {
  render() {
    const { show, onClose, text } = this.props;
    
  setTimeout(() => onClose(), 3000);

    return (
      toast.success(text)
    );
  }
}
