import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const notifySucces = (message) => toast.success(message, {
  autoClose: 2000,
  position: "top-center",
});

export const notifyError = (message) => toast.error(message, {
  autoClose: 3000,
  position: "top-center",
});
