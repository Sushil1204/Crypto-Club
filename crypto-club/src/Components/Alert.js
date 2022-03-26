import { Snackbar } from '@material-ui/core';
import React from 'react'
// import { useState } from 'react';
import { CryptoState } from '../Context/CryptoContext';
import MuiAlart from '@material-ui/lab/Alert'

const Alert = () => {
    const { alert, setAlert } = CryptoState();

    // const handleClick = () => {
    //     setOpen(true)
    // }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setAlert({ open: false });
    }

  return (
      <Snackbar open={alert.open} autoHideDuration={5000} onClose={handleClose}>
          <MuiAlart
              onClose={handleClose}
              elevation={10}
              variant="filled"
              severity={alert.type}
          >
{alert.message}
          </MuiAlart>
    </Snackbar>
  )
}

export default Alert