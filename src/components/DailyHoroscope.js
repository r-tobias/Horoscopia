
import fetchData from "../services/constants"
import { useState, useEffect} from 'react'

export default function DailyHoroscope({sign, timeframe}){

const [horoscope, setHoroscope] = useState('');

useEffect(()=>{
   const reading = async() =>{
    const zodiac = await fetchData(sign, timeframe)
        setHoroscope(zodiac)
        console.log(horoscope)
   } 
   reading()

},[sign, timeframe, horoscope])
    

    return(
        <div>
            {horoscope ? <p>Date: {horoscope.current_date}</p> :<p></p>}
            {horoscope ? <p>Date Range: {horoscope.date_range}</p> :<p></p>}
            {horoscope ? <p>Reading: {horoscope.description}</p> :<p></p>}
        <div>
            

        </div>
        </div>
    )
}
