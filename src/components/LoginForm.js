import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { Link as RouterLink, redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthenticationDispatchContext } from "../contexts/AuthenticationContext";
import { handleLogin } from "../services/userService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useContext(AuthenticationDispatchContext);
  const navigate = useNavigate();

  const login = async () =>
    toast
      .promise(() => handleLogin(email, password), {
        pending: "Signing you in...",
        success: "Successfully signed in",
        error: "Failed to sign in",
      })
      .then((res) => {
        dispatch({ type: "successful-login", token: res.data.token });
        navigate("/");
      })
      .catch((err) => {
        if (err.response.data.error) {
          setError(err.response.data.error);
        } else setError("");
      });

  return (
    <Paper style={styles.formcontainer}>
      <Typography variant="h4" textAlign={"center"}>
        Log In
      </Typography>
      <FormGroup style={styles.formgroup}>
        <FormControl>
          <InputLabel htmlFor="email"> Email Address</InputLabel>
          <Input
            id="email"
            aria-describedby="email-ht"
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
      </FormGroup>
      {error !== "" && (
        <Typography variant="h6" color="error">
          {`${error}`}
        </Typography>
      )}
      <Box textAlign={"left"}>
        <Button onClick={() => login()} variant={"contained"}>
          Log In
        </Button>
      </Box>
      <Typography>
        Don't have an account?{" "}
        <Link component={RouterLink} to={"/signup/"}>
          Signup Now
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

export default LoginForm;
