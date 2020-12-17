import {
  DIALOG_ON,
  DIALOG_OFF,
  POP_UP_MESSAGE_ON,
  POP_UP_MESSAGE_OFF,
  INFO,
  TOAST,
  MESSAGE,
} from '../../constants/actionType';


export const dialogInfoOn = (text) => ({
  type: DIALOG_ON,
  payload: { text, type: INFO },
});

export const dialogToastOn = (text) => ({
  type: DIALOG_ON,
  payload: { text, type: TOAST },
});

export const dialogOff = () => ({
  type: DIALOG_OFF,
});

export const popupMessageOn = (text, data, messagetype) => ({
  type: POP_UP_MESSAGE_ON,
  payload: { text, type: MESSAGE, data, messagetype },
})

export const popupMessageOff = () => ({
  type: POP_UP_MESSAGE_OFF,
});
