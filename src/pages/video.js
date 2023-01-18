import './video.css';
// import videodata from './videodata';

const Video = (props) => {
    // console.log(props);
    return (
        <div className='videoComponent' >
            {/* <h1>This is my Video component</h1> */}
            <iframe className='videoFrame'
                src={props.src}
                title={props.title}
                allowFullScreen
            ></iframe>
            <p className='videoTxt'>{props.text}</p>
        </div >

    )
}

export default Video