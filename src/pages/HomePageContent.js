import Footer from '../Footer';
import profilePic from '../images/IMG_3945.jpg'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
const HomePageContent = () => {
    return (
        <div className="pageContent">
            <Helmet>
                <title>Rea Meir</title>
                <meta name="description" content="Portfolio for Rea Meir - Saxophonist, Composer for Film&Media, Ewi player and Web developer." />
            </Helmet>
            <div className='intro'>

                <div className='homeText'>
                    <div className='myName'>I'm Rea</div>
                    <h1 className='homeText1'>
                        Front-End  Developer.<br />
                        Musician.
                    </h1>
                    <div className='homeText2'>
                        Seeking balance between logic and creativity. <br />
                        Autodidact, multidisciplinary web developer. <br />
                        The muscle and the brain behind <span className='green'><Link to="/onkeylite">OnKey</Link></span>,<span className='green'> <Link to="/upbeatmetronome">UpBeat</Link></span>, <br /> <span className='green'> <Link to="/flashcards">Practice Flashcards</Link></span> and <span className='green'> <Link to="/havila">חבילה עוברת</Link></span>  apps. <br />
                        Music Composer & Wind Player.

                    </div>
                </div>

            </div>
            <div className='trim2'>
                <img src={profilePic} alt="Profile Pic" className='profilePic2' />

            </div>

            <Footer />
        </div>
    )
}



export default HomePageContent