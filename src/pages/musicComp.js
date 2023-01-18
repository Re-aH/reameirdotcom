
import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player"



const MusicComp = (props) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(0.8)

    const playerRef = useRef(null);

    const handleVolumeChange = (event) => {
        setVolume(+event.target.value);
    }

    useEffect(() => {
        if (props.currentlyPlaying !== props.id) {
            setIsPlaying(false);
        }
    }, [props.currentlyPlaying, props.id]);

    function PlayPause() {
        //toggle play pause icon
        setIsPlaying(prevState => !prevState)
        console.log(`${props.id} is now playing`);
        props.handlePlay(props.id);
    }

    function handleSeek(event) {
        playerRef.current.seekTo(event.target.value);
    }
    ;


    return (

        <div className='musicComp' >
            <img className="trackArt" alt={props.title} src={props.img}></img>
            <div className="playPauseBtn" onClick={PlayPause}>
                {!isPlaying ? <img alt="playBtn" className="playBtn" src="./images/icons8-play-30.png"></img> : <img alt="pauseBtn" className="pauseBtn" src="./images/icons8-pause-48.png"></img>}
            </div>
            <ReactPlayer
                url={props.src}
                style={{ display: 'none' }}
                playing={isPlaying}
                onProgress={(progress) => { setProgress(progress.playedSeconds) }}
                onDuration={setDuration}
                volume={volume}
                onSeek={e => setProgress(+e)}
                ref={playerRef}
                id={props.id}



            />
            <div className="trackTitleAlbum">
                <div>{props.title}</div >
                <div className="genre">{props.genre}</div>
            </div>
            <div className="progSlider">
                <input
                    type="range"
                    min="0"
                    max={duration}
                    defaultValue={progress}
                    id="myRange"
                    onChange={handleSeek}
                >
                </input>
            </div>
            <div>
                {Math.floor(progress / 60).toString().padStart(2, '0')}:{Math.floor(progress - (Math.floor(progress / 60) * 60)).toString().padStart(2, '0')}
                /
                {Math.floor(duration / 60).toString().padStart(2, '0')}:{Math.floor(duration - (Math.floor(duration / 60) * 60)).toString().padStart(2, '0')}
            </div>
            <div className="volume">
                <img className="volumeIcon" alt="volumeIcon" src="./images/Speaker_Icon.svg"></img>
                <input

                    type='range'
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                />
            </div>
        </div >

    )
}

export default MusicComp
