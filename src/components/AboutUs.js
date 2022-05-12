import avatar from '../images/avatar.png'

function AboutUs(){

    return(
        <div className='about-us-container'>

        <div className="aboutUs">
            <img className="avatar" src={avatar} alt="avatar"/>
        <div className="thisIsUs">
        {/* <h2>About Us: </h2> */}
        <h1>Anne, Charlton, Demmy, and Rebecca</h1>
        <p></p>
        {/* <a href='https://github.com/r-tobias/fire-group-project'>View group repository</a> */}
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