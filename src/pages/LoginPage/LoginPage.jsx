import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";
import { TextField, Button, Typography, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "400px",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    backgroundColor: "#fff",
  },
  formTitle: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textField: {
    marginBottom: "1rem",
  },
  submitButton: {
    marginTop: "1rem",
    borderRadius: "20px",
    padding: "0.8rem 0",
    fontSize: "1.2rem",
  },
  errorMessage: {
    color: "red",
    margin: "1rem 0",
  },
  signUpLink: {
    marginTop: "1rem",
    textDecoration: "none",
    color: "#000",
    fontWeight: 700,
    fontSize: "1.2rem",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/itinerary");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.formContainer}>
        <Typography variant="h1" className={classes.formTitle}>
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleLoginSubmit}>
          <TextField
            type="email"
            name="email"
            label="Email"
            variant="outlined"
            className={classes.textField}
            fullWidth
            value={email}
            onChange={handleEmail}
          />

          <TextField
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            className={classes.textField}
            fullWidth
            value={password}
            onChange={handlePassword}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.submitButton}
          >
            Login
          </Button>
          </form>
        {errorMessage && (
          <Typography variant="body1" className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
            <Link to="/signup" className={classes.signUpLink}>
      Don't have an account? Sign up here.
    </Link>
  </Container>
</div>
);
}

export default LoginPage;
