import avatar from '../images/avatar.png'

function AboutUs(){

    return(
        <div className='about-us-container'>

        <div className="aboutUs">
            <img className="avatar" src={avatar} alt="avatar"/>
        <div className="thisIsUs">
        <h1>About The Team:</h1>
        <p>Rebecca Tobias - <a className = "clickHere" href='https://github.com/r-tobias'>Github</a></p>
        <p>Charlton Rosero - <a className = "clickHere" href='https://github.com/Charlton-Rosero'>Github</a></p>
        <p>Demmy Rodriguez - <a className = "clickHere" href='https://github.com/DemmyRodriguez'>Github</a></p>
        <p>Anne Imomoh - <a className = "clickHere" href='https://github.com/omokhele'>Github</a></p>
            
        </div>
        </div>
        {/* <hr></hr> */}
        <div className="ourSite">
        <h1>About Horoscopia!</h1>
        <p>This horoscope website is designed to tell you your daily horoscope needs. Missed a day? Not to worry as we will have all horoscope readings saved for past (yesterday), present (today), and future (tomorrow). Need to know your crushes horoscope? Do not fret, we have added filtering out specific horoscopes so you can check them all! </p>
        </div>
        </div>
    )
}

export default AboutUs