import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { dialogOff } from '../../redux/actions';
import InfoDialog from './types/InfoDialog';
import InfoToast from './types/ToastDialog';

class Dialog extends React.Component {
  handleClose = () => this.props.dialogOff();

  render() {
    const { show, type, text } = this.props;
    const dialogTypes = {
      INFO: InfoDialog,
      TOAST: InfoToast,
    };
    if (show && type) {
      const DialogImpl = dialogTypes[type];

      return ReactDOM.createPortal(
        <DialogImpl text={text} show={show} onClose={this.handleClose} />,
        document.body,
      );
    }
    return null;
  }
}

const mapStateToProps = ({ dialog }) => ({
  show: dialog.show,
  text: dialog.text,
  type: dialog.type,
});

const mapDispatchToProps = { dialogOff };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dialog);
