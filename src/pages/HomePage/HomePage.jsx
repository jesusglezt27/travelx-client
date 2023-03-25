import { Button, Container, Typography, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/tripi2.jpg';
import {useContext} from 'react'
import {AuthContext} from '../../context/auth.context'

const styles = {
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  subtitle: {
    color: '#fff',
    fontSize: '1.5rem',
    marginBottom: '3rem',
  },
  button: {
    color: '#fff',
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    padding: '1rem 2rem',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
};



const HomePage = () => {
  const {user} = useContext(AuthContext)

  return (
<Box sx={styles.root}>
  <div style={styles.content}>
    <Typography variant="h1" style={styles.title}>
      Planifica tus viajes de manera sencilla
    </Typography>
    <Typography variant="h3" style={styles.subtitle}>
      Bienvenido a nuestra aplicación de planificación de viajes. Con nuestra herramienta, puedes organizar tu itinerario, alojamiento, vuelo y actividades.
    </Typography>
    <Link to={user ? '/itinerary' : '/login'}>
      <Button variant="contained" style={styles.button}>
        Comenzar
      </Button>
    </Link>
  </div>
</Box>
  );
};

export default HomePage;