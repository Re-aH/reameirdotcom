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

                <img src={profilePic} alt="Profile Pic" className='profilePic' />
                <p className='homeText'>
                    Saxophonist, EWI Player, Composer, Arranger, Educator, Programmer & Web Developer.
                </p>
            </div>
            <p className='homeText2'>
                Creativity and Logic, Inspiration and Repetition, are just a few of the building blocks. <br></br> For music, programming, and much more.
            </p>
            <Footer />
        </div>
    )
}



export default HomePageContent