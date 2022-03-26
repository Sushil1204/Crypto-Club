import { Box, Button, TextField } from '@material-ui/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { CryptoState } from '../../Context/CryptoContext';
import { auth } from '../../firebase';

const Signin = ({ handleClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const { setAlert } = CryptoState();
    const handleSubmit = async () => {
        if (!email || !password) {
          setAlert({
            open: true,
            message: "Please fill all the Fields",
            type: "error",
          });
          return;
        }
    
        try {
          const result = await signInWithEmailAndPassword(auth, email, password);
          setAlert({
            open: true,
            message: `Sign In Successful. Welcome ${result.user.email}`,
            type: "success",
          });
    
          handleClose();
        } catch (error) {
          setAlert({
            open: true,
            message: error.message,
            type: "error",
          });
          return;
        }
      };
    
  return (
          <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        style={{ marginBottom: "20px" }}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#EEBC1D" }}
      >
        Login
      </Button>
    </Box>
  )
}

export default Signin