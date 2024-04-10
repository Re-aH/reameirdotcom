import { Helmet } from 'react-helmet';

const Flashcards = () => {

    return (
        <div>
            <Helmet>
                <title>Practics Flashcards</title>
                <meta name="description" content="Practice Flashcards" />
            </Helmet>
            <div className="metContainer">

                <a href='https://apps.apple.com/us/app/practice-flashcards/id6480441352' target="_blank" rel="noreferrer"><img src="./images/app-store-badge.png" alt='FaceBook' className='appStore badge'></img></a>

                <a href='https://play.google.com/store/apps/details?id=com.reameir.flashcards' target="_blank" rel="noreferrer"><img src="./images/google-play-badge.png" alt='PlayStore' className='playStore badge'></img></a>

            </div>
            <div className='flashContainer'>
                <img className="flashFeature" alt="flashcardsFeatureGraphic" src="./images/feature graphic.png"></img>
                <div className='flashItem' >
                    <img className="flashIcon" alt="flashcardsIcon" src="./images/flashcards icon.png"></img>


                    <h1 className='flashcardsH1'>Practice Flashcards</h1>
                </div>
                <div className='flashItem' >

                    <p className='flashItem'> Practice mental agility with Practice Flashcards.
                    </p>


                    <p className='flashCard'>C</p>
                </div>

                <div className='flashItem' >



                    <p className='flashCard2'>F</p>
                    <p className='flashItem'> The Practice Flashcards app will display <br></br> different tonic names for you to practice on, <br></br> changing every measure or based on your settings.
                    </p>
                </div>
                <div className='flashItem' >

                    <p className='flashItem'> One can now use these tonics <br></br>to practice different <br></br> scales, chords, licks, harmonic<br></br>  progressions or any<br></br>  exercise you can come up with.
                    </p>


                    <p className='flashCard'>A</p>
                </div>
                <img className="flashScreenshot" alt="flashcardsIcon" src="./images/IMG_2291.PNG"></img>

            </div>

        </div>

    )
}

export default Flashcards