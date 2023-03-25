import Card from '../Card/Card';
import { getAllItinerary, removeItinerary } from '../../services/itinerary.service';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import backgroundImage from '../../images/tripi2.jpg';

const CardPageContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

function CardPage() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  
  const getData = async () => {
    try {
      const response = await getAllItinerary();
      setList(response.data);
    } catch (error) {
      console.log('errorsillo', error);
    }
  };

  const onDelete = async (id) => {
    try {
      await removeItinerary(id);
      setList(prevState => prevState.filter(item => item._id !== id));
    } catch (error) {
      console.log('errorsillo', error);
    }
  };

  const goTo = (id) => {
    navigate(`/detailspage/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardPageContainer>
      {list.length ? (
        list.map((item, index) => (
          <Card
            goTo={() => goTo(item._id)}
            onDelete={() => onDelete(item._id)}
            onEdit={() => navigate(`/edit/${item._id}`)}
            key={index}
            {...item}
          />
        ))
      ) : (
        <div>
          <h1>No hay itinerario</h1>
        </div>
      )}
    </CardPageContainer>
  );
}

export default CardPage;
