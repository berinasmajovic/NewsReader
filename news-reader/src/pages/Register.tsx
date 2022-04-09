import { Button, Grid, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/homepage");
  }, [user, loading]);

  return (
    <div style={{ margin: "20px"}}>
      <Typography variant="h4" gutterBottom component="div">
        REGISTER
      </Typography>
      <Grid container spacing={3} style={{ width: "30%", margin: "0 auto" }}>
        <Grid item xs={6}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue=""
            variant="filled"
            placeholder="Email"
            onChange={(event) => setRegisterEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue=""
            variant="filled"
            placeholder="Password"
            type={"password"}
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            onClick={() =>
              registerWithEmailAndPassword(registerEmail, registerPassword)
            }
          >
            CREATE USER
          </Button>
          <div>
            Already have an account? <Link to="/">Login</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
