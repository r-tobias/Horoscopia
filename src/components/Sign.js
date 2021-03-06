
function Sign({handleSelectedSign}){

    return(
        <div className='sign-container'>
            {[ "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces" ].map((sign) =>(
                <button className={sign} to='/time' key={sign} onClick={()=> handleSelectedSign(sign)}>{sign}<br/>
                </button>      
            ))}         

        </div>

    )

}

export default Sign;
