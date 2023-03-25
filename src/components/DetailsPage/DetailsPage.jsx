import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { detailById } from '../../services/itinerary.service';
import './DetailsPage.css'; // Importar archivo CSS personalizado

function DetailsPage() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await detailById(id);
        setDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('errorsillo', error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="details-page">
      <h2>{detail.title}</h2>
      <img src={detail.image} width={700} height={500} />
      <p>Details</p>
      <div className='flight-details'>
        <p>Duration: {detail.duration}</p>
        <p>Country: {detail.country}</p>
        <p>City: {detail.city}</p>
      </div>
      <p>Flight Details</p>
      {detail.flightDetails?.length ? (
        <div className="flight-details">
          {detail.flightDetails.map((flight) => (
            <div key={flight.id}>
              <p>Airline: {flight.airline}</p>
              <p>Date: {flight.date}</p>
              <p>Time: {flight.time}</p>
              <p>Departure: {flight.departure}</p>
              <p>Arrival: {flight.arrival}</p>
            </div>
          ))}
        </div>
      ) : null}
      <p>Hotel Details</p>
      {detail.hotelDetails?.length ? (
        <div className="hotel-details">
          <p>Name: {detail.hotelDetails[0].hotelName}</p>
          <p>Check in: {detail.hotelDetails[0].checkIn}</p>
          <p>Check out: {detail.hotelDetails[0].checkOut}</p>
        </div>
      ) : null}
      <p>Activities</p>
      {detail.activities?.length ? (
        <div className="activities">
          <p>Title: {detail.activities[0].title}</p>
          <p>Date: {detail.activities[0].date}</p>
          <p>Time: {detail.activities[0].time}</p>
          <p>Location: {detail.activities[0].location}</p>
          <p>Notes: {detail.activities[0].notes}</p>
        </div>
      ) : null}
    </div>
  );
}

export default DetailsPage;
