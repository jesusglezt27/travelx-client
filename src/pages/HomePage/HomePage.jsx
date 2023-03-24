import { Button, Container, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom';
import backgrounds from '../../images/tripi2.jpg';
import {useContext} from 'react'
import {AuthContext} from '../../context/auth.context'


const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  overlay: {
    backgroundImage: `url(${backgrounds})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    textAlign: "center",
  },
  firstContainer: {

  },
  heading: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  description: {
    color: "#fff",
    fontSize: "1.5rem",
    marginBottom: "2rem",
  },
  button: {
    backgroundColor: "#fff",
    color: "#000",
    fontWeight: 700,
    fontSize: "1.5rem",
    padding: "1rem 2rem",
    "&:hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
}));

const HomePage = () => {
  const {user} = useContext(AuthContext)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <Container maxWidth="md" className={classes.firstContainer}>
          <Typography variant="h1" component="h1" className={classes.heading}>
            Planifica tus viajes de manera sencilla
          </Typography>
          <Typography
            variant="h4"
            component="p"
            className={classes.description}
          >
            Bienvenido a nuestra aplicación de planificación de viajes. Con
            nuestra herramienta, puedes organizar tu itinerario, alojamiento, vuelo y actividades.
          </Typography>
          <Link to={user?"/itinerary":"/login"}>
            <Button
              variant="contained"
              className={classes.button}
              aria-label="Comenzar a planificar viajes"
            >
            Comenzar
            </Button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;