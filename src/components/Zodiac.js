import { useState} from 'react'
import Sign from './Sign'
import TimeFrame from './TimeFrame'
import DailyHoroscope from './DailyHoroscope'



function Zodiac(){

    
    const [selectedSign, setSelectedSign] = useState(null)
    const [timeframe, setTimeFrame] = useState(null)
    return(
        <div className='zodiac-container'>
            <div className='sign-container'>
            <h1 className='sign-title'>Choose a Zodiac</h1>
            <Sign handleSelectedSign={setSelectedSign}/>
            </div>
            <div className='timeframe-result-container'>
            <div className='timeframe-container'>
            {<TimeFrame time={setTimeFrame}/>}
            <h1>Sign Selected: {selectedSign}</h1>
            <h1>Day Selected: {timeframe}</h1>
            </div>
            
            <div className='result-container'>

            <DailyHoroscope sign={selectedSign}timeframe={timeframe} />
            </div>

            </div>
        </div>
    )
}

export default Zodiac