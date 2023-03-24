import Card from '../Card/Card'
import {getAllItinerary, removeItinerary} from '../../services/itinerary.service'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'


function CardPage(){
    const [list, setList] = useState([])
    const navigate = useNavigate()
    const getData = async () => {


        try {
            const response = await getAllItinerary()
            setList(response.data)
        } catch (error) {
            console.log('errorsillo', error)
        }
    }
const onDelete = async (id)=>{
try {
    await removeItinerary(id)
    setList(prevState=>prevState.filter((item)=>item._id !== id))
} catch (error) {
    console.log("errorsillo", error)
}
}

const goTo = (id)=>{
    navigate(`/detailspage/${id}`)
}

useEffect(()=>{
getData()
}, [])

    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {list.length ?
                list.map((item, index) => (<Card 
                goTo={()=>goTo(item._id)} 
                onDelete={() => onDelete(item._id)} onEdit={()=>navigate(`/edit/${item._id}`)} key={index} {...item} />)) :
                <div>
                    <h1>No hay itinerario</h1>
                </div>
            }
        </div>
    )
}

export default CardPage;
