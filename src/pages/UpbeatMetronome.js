import { Helmet } from "react-helmet"

const UpbeatMetronome = () => {

    return (
        <>
            <Helmet>
                <title>Upbeat Metronome</title>
                <meta name="description" content="A FREE online metronome with a pendulum that goes up and down, to help the player to better visualize an up-beat and a down-beat." />
            </Helmet>



            <div className="metContainer">

                <a href='https://apps.apple.com/il/app/upbeat-metronome/id1672580049' target="_blank" rel="noreferrer"><img src="./images/app-store-badge.png" alt='FaceBook' className='appStore badge'></img></a>

                <a href='https://play.google.com/store/apps/details?id=com.reameir.upbeatmetronome&hl=en_US' target="_blank" rel="noreferrer"><img src="./images/google-play-badge.png" alt='PlayStore' className='playStore badge'></img></a>

            </div>
            <iframe className="upbeat" title="Upbeat Metronome" src="https://re-ah.github.io/Upbeat-Metronome/">

            </iframe>



        </>
    )
}

export default UpbeatMetronome