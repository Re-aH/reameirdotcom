import Footer from "../Footer"
import { Helmet } from "react-helmet"
// import Video from "./video"

const ReaMeirGroup = () => {

    return (
        <div>
            <Helmet>
                <title>Rea Meir Group</title>
                <meta name="description" content="The Rea Meir Group is a jazz fusion qurtet, featuring the EWI as the lead wind instrument. " />
            </Helmet>
            <h1 className="RMGheader">Rea Meir Group</h1>
            <img className="groupPic" alt="Rea Meir Group" src="./images/reameirgroup1.webp"></img>

            <iframe className="RMGvid" src="https://www.youtube.com/embed/60_hN7_0Yyo" title="Rea Meir Group" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            <iframe className="RMGvid" src="https://www.youtube.com/embed/XqTi_OYLE8E" title="1st Contact" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <iframe className="RMGvid" src="https://www.youtube.com/embed/F88Q82FliIY" title="Haview et Hastav" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <div className="RMGimgtxt">
                <img alt="ewi" src="./images/reameirewi.jpg" className="ewiImg"></img>
                <div>

                    <p className="RMGtext1">
                        The Rea Meir Group is a jazz fusion qurtet, featuring the EWI as the lead wind instrument. <br></br>
                        Playing original music, as well as arrangements of tunes we love.
                    </p>
                    <h5 className="RMGtext">
                        The band:</h5>
                    <p className="RMGtext">

                        Rea Meir - EWI  <br></br>
                        Shai Sobol - Guitar<br></br>
                        Yaniv Shalev - Bass<br></br>
                        Itay Hibsher - Drums</p>

                    <h5 className="RMGtext">Our albums on Spotify:</h5>
                </div>
            </div>
            <iframe className="spotifyPlayer" title="liveAlbum" src="https://open.spotify.com/embed/album/1AL0QjzoOSy8ZeRUR6yahc?utm_source=generator&theme=0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <iframe className="spotifyPlayer" title="studioAlbum" src="https://open.spotify.com/embed/album/5Ngzxv9OUDMxbrZz2hGkx5?utm_source=generator" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <iframe className="RMGvid" src="https://www.youtube.com/embed/mjkMJhwKi14" title="1minute" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <iframe className="RMGvid" src="https://www.youtube.com/embed/xyLGdRR1ak0" title="Eich Ze" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            <iframe className="RMGvid" src="https://www.youtube.com/embed/82nJ4BDTzxE" title="Four Body" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <iframe className="RMGvid" src="https://www.youtube.com/embed/AnbrOdNRQ2Y" title="J.S. Bach: The Art of Fuge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <iframe className="RMGvid" src="https://www.youtube.com/embed/rtBIV7Q4UNk" title="Syrinx" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            <iframe className="RMGvid" src="https://www.youtube.com/embed/q7a5kTHWTxg" title="Cello Suite no1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>


            <iframe className="RMGvid" src="https://www.youtube.com/embed/FCcZqSS8fcs" title="Atur" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <Footer />
        </div>

    )
}

export default ReaMeirGroup
