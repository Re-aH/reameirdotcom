import MusicComp from './musicComp';
import Footer from '../Footer';
import { useState } from "react";
import { Helmet } from 'react-helmet';
// import Artlist from './pages/Artlist.png'

const Music = () => {
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

    const handlePlay = (id) => {
        setCurrentlyPlaying(id);
    }


    return (
        <div>
            <Helmet>
                <title>Rea Meir Music</title>
                <meta name="description" content="Portfolio for Rea Meir - FilmScoring music demos, of composer Rea Meir. Music for Film&Media, Library music." />
            </Helmet>
            <div className='artlist'>
                Most tracks are available for download and licensing at <a href='https://artlist.io/artist/563/rea-meir' target="_blank" rel="noreferrer"><img src='./images/Artlist.png' alt='Artlist' className='artlistImg'></img><span className='yellow'>.io</span></a>
            </div>
            <MusicComp
                id="player2"
                img="https://i1.sndcdn.com/artworks-000439786980-kakcvy-t500x500.jpg"
                src="https://soundcloud.com/hagai-yodan/rea-meir-a-minute-in-gb-hagai-yodan-piano?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                title="A Minute in Gb | Hagai Yodan "
                genre="Piano"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player24"
                img="../moon.jpg"
                src="../musicfiles/taking it all in.mp3"
                title="Taking it all in"
                genre="Sci-Fi"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player25"
                img="../moon.jpg"
                src="../musicfiles/seeds of doubt.mp3"
                title="Seeds of Doubt"
                genre="Sci-Fi, Eerie"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player26"
                img="../moon.jpg"
                src="../musicfiles/sparkly shiny feel good.mp3"
                title="Sparkly Shiny"
                genre="Sci-Fi, feel good"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player1"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/AFreshStart.mp3"
                title="A Fresh Start"
                genre="Cinematic, Acustic"
                mp3="./images/AFreashStart.png"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player3"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Begining of a Beautiful Story.mp3"
                title="Begining of a Beautiful Story"
                genre="Orcestral"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player4"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Comic Chase.mp3"
                title="Comic Chase"
                genre="Gypsy Swing"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player5"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Creme Brulee.mp3"
                title="Creme Brulee"
                genre="Dreamy"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player6"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Forthcoming.mp3"
                title="Forthcoming"
                genre="Action"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player7"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Kipod.mp3"
                title="Kipod"
                genre="Melancholy"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player8"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Megatopia.mp3"
                title="Megatopia"
                genre="Sci-Fi"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player9"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Mist.mp3"
                title="Mist"
                genre="Mystery"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player10"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Party Groove.mp3"
                title="Party Groove"
                genre="Drum&Bass"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player11"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Reflection of Kindness.mp3"
                title="Reflection of Kindness"
                genre="Piano,Strings"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player12"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Time to Act.mp3"
                title="Time to Act"
                genre="Electronic"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player13"
                img="../musicfiles/Mindsets/MINDSETS-Rea Meir.jpg"
                src="../musicfiles/Mindsets/Tres Jolie.mp3"
                title="Tres Jolie"
                genre="Piano, Lonely"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player14"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/becoming.mp3"
                title="Becoming"
                genre="Optimistic"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player15"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/lament.mp3"
                title="Lament"
                genre="Adagio"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player16"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/prevail.mp3"
                title="Prevail"
                genre="Comforting"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player17"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/small reflections.mp3"
                title="Small Reflections"
                genre="Minimal, Piano"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player18"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/small touch.mp3"
                title="Small Touch"
                genre="Minimal, Piano"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player19"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/so still.mp3"
                title="So Still"
                genre="Ambiant, Minimal"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player20"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/sol.mp3"
                title="Sol"
                genre="Hopefull"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player21"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/the brink of storm.mp3"
                title="Brink of Storm"
                genre="Action, Strings"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player22"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/the way it used to be.mp3"
                title="The Way It Used To Be"
                genre="Waltz,Piano"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />
            <MusicComp
                id="player23"
                img="../musicfiles/PianoStringMoods/piano and string moods.jpg"
                src="../musicfiles/PianoStringMoods/too bad.mp3"
                title="Too Bad"
                genre="Piano, Sadness"
                handlePlay={handlePlay}
                currentlyPlaying={currentlyPlaying}
            />

            <Footer />

        </div>
    )
}

export default Music