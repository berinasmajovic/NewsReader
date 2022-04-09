import { Button, Grid, TextField, Typography } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, loginWithEmailAndPassword } from "../firebase-config";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/homepage");
    }
  }, [user, loading]);

  

  return (
    <div style={{ margin: "20px"}}>
      <Typography variant="h4" gutterBottom component="div">
        LOGIN
      </Typography>
      <Grid container spacing={3} style={{ width: "30%", margin: "0 auto" }}>
        <Grid item xs={6}>
          <TextField
            hiddenLabel
            id="filled-hidden-label-normal"
            defaultValue=""
            variant="filled"
            placeholder="Email"
            onChange={(event) => setLoginEmail(event.target.value)}
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
            onChange={(event) => setLoginPassword(event.target.value)}
          />
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            onClick={() => loginWithEmailAndPassword(loginEmail, loginPassword)}
          >
            LOGIN
          </Button>
          <div>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
