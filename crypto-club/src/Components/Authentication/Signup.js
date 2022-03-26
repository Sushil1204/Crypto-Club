import { Box, Button, TextField } from "@material-ui/core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { CryptoState } from "../../Context/CryptoContext";
import { auth } from "../../firebase";

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cnfpassword, setCnfpassword] = useState();
  const { setAlert } = CryptoState();
  const handleSubmit = async () => {
    if (password !== cnfpassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
      } 
      try {
        const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
          console.log(result);
          setAlert({
            open: true,
            message: `Sign Up Successful. Welcome ${result.user.email}`,
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
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
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
        style={{ marginBottom: "20px" }}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        type="password"
        value={cnfpassword}
        style={{ marginBottom: "20px" }}
        onChange={(e) => setCnfpassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#EEBC1D" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
