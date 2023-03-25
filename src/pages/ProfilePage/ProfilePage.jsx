import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const useStyles = styled(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  contentContainer: {
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
  title: {
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "2rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    marginTop: "1rem",
    borderRadius: "20px",
    padding: "0.8rem 0",
    fontSize: "1.2rem",
  },
}));

function ProfilePage() {
  const classes = useStyles();
  const { logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <Typography variant="h2" className={classes.subtitle}>
          Welcome back!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.button}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default ProfilePage;
