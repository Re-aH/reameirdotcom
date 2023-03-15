// import Spotify from './images/Spotify_icon.png'
import YouTube from './images/YouTube_icon.png'
import FaceBook from './images/Facebook_icon.png'
import Linked from './images/Linked_icon.png'
// import Imdb from './images/imdb_icon.png'
// import AppStore from './images/app-store_icon.png'
// import GooglePlay from './images/google_play_icon.png'


const socialLinks = () => {
    return (
        <div className='socialLinks'>
            {/* <a href='https://open.spotify.com/artist/3uJjylEIpiPRLRUBGLyyIp?si=toA6-pcpSSOG_m5FVFWM9g' target="_blank" rel="noreferrer"><img src={Spotify} alt='Spotify' className='socialLinkPic'></img></a> */}
            <a href='https://www.youtube.com/reameir1' target="_blank" rel="noreferrer"><img src={YouTube} alt='YouTube' className='socialLinkPic'></img></a>
            <a href='https://www.linkedin.com/in/rea-meir-28337554/' target="_blank" rel="noreferrer"><img src={Linked} alt='LinkedIn' className='socialLinkPic'></img></a>
            {/* <a href='https://www.imdb.com/name/nm4569288/' target="_blank" rel="noreferrer"><img src={Imdb} alt='Imdb' className='socialLinkPic'></img></a> */}
            <a href='https://www.facebook.com/ReaMeirMusic' target="_blank" rel="noreferrer"><img src={FaceBook} alt='FaceBook' className='socialLinkPic'></img></a>
            {/* <a href='https://apps.apple.com/us/app/onkey-scale-practice/id1638204692?ign-itscg=30200&ign-itsct=apps_box_badge' target="_blank" rel="noreferrer"><img src={AppStore} alt='FaceBook' className='socialLinkPic'></img></a> */}
            {/* <a href='https://play.google.com/store/apps/dev?id=9186350211392968702' target="_blank" rel="noreferrer"><img src={GooglePlay} alt='PlayStore' className='socialLinkPic'></img></a> */}

        </div>

    )

}

export default socialLinks