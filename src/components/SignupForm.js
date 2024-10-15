import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { handleSignup } from "../services/userService";
import { Link as RouterLink } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState("");

  const signup = () =>
    toast
      .promise(
        () => handleSignup(email, password, confPassword, fname, lname),
        {
          pending: "Creating Account",
          success: "Successfully created account",
          error: "Failed to create account",
        },
      )
      .then(() => redirect("/"))
      .catch((err) => {
        if (err.response.data.error) {
          setError(err.response.data.error);
        } else setError("");
      });

  return (
    <Paper style={styles.formcontainer}>
      <Typography variant="h4" textAlign={"center"}>
        Sign Up
      </Typography>
      <FormGroup style={styles.formgroup}>
        <FormControl>
          <InputLabel htmlFor="fname">First Name</InputLabel>
          <Input
            id="fname"
            type="text"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lname">Last Name</InputLabel>
          <Input
            id="lname"
            type="text"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="confPassword">Confirm Password</InputLabel>
          <Input
            id="confPassword"
            type="password"
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </FormControl>
      </FormGroup>
      {error !== "" && (
        <Typography variant="h6" color="error">
          {`${error}`}
        </Typography>
      )}
      <Box textAlign={"left"}>
        <Button
          onClick={() => signup(email, password, confPassword)}
          variant={"contained"}
        >
          Sign Up
        </Button>
      </Box>
      <Typography>
        Already have an account?{" "}
        <Link component={RouterLink} to={"/login/"}>
          Log In
        </Link>
      </Typography>
    </Paper>
  );
};

const styles = {
  formcontainer: {
    margin: "auto",
    width: "40%",
    padding: "20px",
  },
  formgroup: {
    margin: "auto",
    marginBottom: "10px",
    gap: "10px",
  },
};

export default SignupForm;
