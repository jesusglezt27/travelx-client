import FlightDetails from '../../components/FlightDetails/FlightDetails';
import Activities from '../../components/Activities/Activities';
import HotelDetails from '../../components/HotelDetails/HotelDetails';
import Details from '../../components/Details/Details';
import Notes from '../../components/Notes/Notes';
import { Button } from "@mui/material";
import {useState} from 'react'
import {addItinerary} from '../../services/itinerary.service'
import {useNavigate} from 'react-router-dom'

function CreatePage(){
    const [details,setDetails] = useState({})
    const [flightDetails,setFlightDetails] = useState({})
    const [hotelDetails,setHotelDetails] = useState({})
    const [activities,setActivities] = useState({})
    const [notes,setNotes] = useState({})
    const navigate = useNavigate()

    const onSubmit = async()=>{
        try{
            if (!Object.keys(details).length){
                return
            }
            const response = await addItinerary({...details, flightDetails: [flightDetails], hotelDetails:[hotelDetails], activities:[activities], notes: [notes]})
            console.log('todo chido',{...details, flightDetails: [flightDetails], hotelDetails:[hotelDetails], activities:[activities], notes: [notes]})
            navigate('/cardpage')
        }catch(error){
            console.log("mensaje de error", error)
        }
    } 

    return(
        <div>
            <Details handleState = {(value, key)=>{
                setDetails((prevState) => ({...prevState,[key]: value}))
            }}/>
            <FlightDetails handleState = {(value, key)=>{
                setFlightDetails((prevState) => ({...prevState,[key]: value}))
            }}/>
            <HotelDetails handleState = {(value, key)=>{
                setHotelDetails((prevState) => ({...prevState,[key]: value}))
            }}/>
            <Activities handleState = {(value, key)=>{
                setActivities((prevState) => ({...prevState,[key]: value}))
            }}/>
            <Button variant='contained' onClick={onSubmit}>
                Crear
            </Button>
        </div>
    )
}

export default CreatePage;
