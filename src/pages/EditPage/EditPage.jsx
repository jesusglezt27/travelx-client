import FlightDetails from '../../components/FlightDetails/FlightDetails';
import Activities from '../../components/Activities/Activities';
import HotelDetails from '../../components/HotelDetails/HotelDetails';
import Details from '../../components/Details/Details';
import { Button } from "@mui/material";
import {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {detailById, editItinerary} from '../../services/itinerary.service'



function EditPage(){
    const [details,setDetails] = useState({})
    const [flightDetails,setFlightDetails] = useState({})
    const [hotelDetails,setHotelDetails] = useState({})
    const [activities,setActivities] = useState({})
    const [notes,setNotes] = useState({})
    const navigate = useNavigate()
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    const onSubmit = async()=>{
        try{
            if (!Object.keys(details).length){
                return
            }
            const response = await editItinerary(id,{...details, flightDetails: [flightDetails], hotelDetails:[hotelDetails], activities:[activities], notes: [notes]})
            console.log('todo chido',{...details, flightDetails: [flightDetails], hotelDetails:[hotelDetails], activities:[activities], notes: [notes]})
            navigate('/cardpage')
        }catch(error){
            console.log("mensaje de error", error)
        }
    } 


const getData = async ()=>{
try {
    const response = await detailById(id)
    setDetails({title: response.data.title, duration: response.data.duration, country: response.data.country, city: response.data.city})
    setFlightDetails(response.data.flightDetails)
    setHotelDetails(response.data.hotelDetails)
    setActivities(response.data.activities)
    setIsLoading(false)
} catch (error) {
    console.log('errorsillo', error)
}
}

useEffect(()=>{getData()}, [])
    return(
        isLoading?<div>
            <p>Loading...</p>
        </div>:<div>
            <Details details={details} handleState = {(value, key)=>{
                setDetails((prevState) => ({...prevState,[key]: value}))
            }}/>
            <FlightDetails flightDetails={flightDetails} handleState = {(value, key)=>{
                setFlightDetails((prevState) => ({...prevState,[key]: value}))
            }}/>
            <HotelDetails hotelDetails={hotelDetails} handleState = {(value, key)=>{
                setHotelDetails((prevState) => ({...prevState,[key]: value}))
            }}/>
            <Activities activities={activities} handleState = {(value, key)=>{
                setActivities((prevState) => ({...prevState,[key]: value}))
            }}/>
            <Button variant='contained' onClick={onSubmit}>
                Crear
            </Button>
        </div>
    )
}

export default EditPage;
