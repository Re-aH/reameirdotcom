import Footer from '../Footer';
import profilePic from '../images/profilepic.jpg'
import { Helmet } from 'react-helmet';

const HomePageContent = () => {
    return (
        <div className="pageContent">
            <Helmet>
                <title>Rea Meir</title>
                <meta name="description" content="Portfolio for Rea Meir - Saxophonist, Composer for Film&Media, Ewi player and Web developer." />
            </Helmet>
            <div className='intro'>

                <div className='homeText'>
                    <div className='myName'>Rea Meir</div><br />
                    <div className='homeText1'>
                        Front-End Developer. <br />
                        Programmer. Musician.
                    </div>
                    <div className='homeText2'>
                        Seeking balance between Creativity and Logic. <br />
                        Web-Developer. Composer for Film&Media. Saxophone, Flute and EWI player.
                    </div>
                </div>
                <img src={profilePic} alt="Profile Pic" className='profilePic' />
            </div>

            <Footer />
        </div>
    )
}



export default HomePageContent