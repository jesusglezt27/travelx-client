import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {detailById} from '../../services/itinerary.service'

function DetailsPage({}) {
    const [detail, setDetail] = useState({})

const {id} = useParams()
const getData = async ()=>{
try {
    const response = await detailById(id)
    setDetail(response.data)
    console.log(response.data)
} catch (error) {
    console.log('errorsillo', error)
}
}

useEffect(()=>{getData()}, [])

return (

    <div>
    <h2>{detail.title}</h2>
    <img src={detail.image} width={700} height={500} />
    <p>Details: </p>
    <div>
        <p>Duration: {detail.duration}</p>
        <p>Country: {detail.country}</p>
        <p>City: {detail.city}</p>
    </div>
    <p>Flight Details:</p>

    { detail.flightDetails && detail.flightDetails.length && <div>
        <p>Airline: {detail.flightDetails[0].airline}</p>
        <p>Date: {detail.flightDetails[0].date}</p>
        <p>Time: {detail.flightDetails[0].time}</p>
        <p>Departure: {detail.flightDetails[0].departure}</p>
        <p>Arrival: {detail.flightDetails[0].arrival}</p>
    </div>}

    <p>Hotel Details:</p>
    {detail.hotelDetails && detail.hotelDetails.length && <div>
        <p>Name: {detail.hotelDetails[0].hotelName}</p>
        <p>Check in: {detail.hotelDetails[0].checkIn}</p>
        <p>Check out: {detail.hotelDetails[0].checkOut}</p>
    </div>}

    <p>Activities:</p>
    {detail.activities && detail.activities.length && <div>
        <p>Title: {detail.activities[0].title}</p>
        <p>Date: {detail.activities[0].date}</p>
        <p>Time: {detail.activities[0].time}</p>
        <p>Location: {detail.activities[0].location}</p>
        <p>Notes: {detail.activities[0].notes}</p>
        <p></p>
    </div>}

    </div>
);
}

export default DetailsPage;