import {
  DIALOG_ON,
  DIALOG_OFF,
  POP_UP_MESSAGE_ON,
  POP_UP_MESSAGE_OFF
} from '../../constants/actionType';

const INIT_STATE = {
  show: false,
  text: '',
  type: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DIALOG_ON:
      return {
        show: true, text: action.payload.text, type: action.payload.type,
      };
    case DIALOG_OFF:
      return INIT_STATE;

    case POP_UP_MESSAGE_ON:
      return {
        show: true,
        text: action.payload.text,
        type: action.payload.type,
        data: action.payload.data,
        messagetype: action.payload.messagetype,
      };

    default:
      return state;
  }
};
