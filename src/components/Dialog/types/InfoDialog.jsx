import React from 'react';
import {
  Button, Modal, ModalBody, ModalFooter,
} from 'reactstrap';

export default class InfoDialog extends React.PureComponent {
  render() {
    const { show, onClose, text } = this.props;
    return (
      <Modal isOpen={show} toggle={onClose}>
        <ModalBody>
          { text }
        </ModalBody>
        <ModalFooter>
          <Button className="btn-outshifter-filled" onClick={onClose}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
