import { Helmet } from 'react-helmet';

const Havila = () => {

    return (
        <div>
            <Helmet>
                <title>חבילה עוברת</title>
                <meta name="description" content="חבילה עוברת " />
            </Helmet>
            <div className="metContainer">

                <a href='https://apps.apple.com/il/app/%D7%97%D7%91%D7%99%D7%9C%D7%94-%D7%A2%D7%95%D7%91%D7%A8%D7%AA/id6448994068' target="_blank" rel="noreferrer"><img src="./images/app-store-badge.png" alt='FaceBook' className='appStore badge'></img></a>

                <a href='https://play.google.com/store/apps/details?id=com.reameir.havila&pcampaignid=web_share' target="_blank" rel="noreferrer"><img src="./images/google-play-badge.png" alt='PlayStore' className='playStore badge'></img></a>

            </div>
            <div className='havila'>

                <h1 className="havilaTxt1">חבילה עוברת</h1>
                <p className="havilaTxt2">חבילה עוברת בגרסאת האפליקציה - כי למי יש עוד ניירות עיתון? <br></br>
                    תקתקו פנימה משימות והעבירו את הנייד מאחד לשני.</p>
                <img className="havilaItem" alt="havilaLogo" src="./images/ezgif-3-c4f72eee6b.jpg"></img>

                <img className="havilaItem" alt="havilaLogo" src="./images/230x0w (1).webp"></img>
                <img className="havilaItem" alt="havilaLogo" src="./images/230x0w (2).webp"></img>
                <img className="havilaItem" alt="havilaLogo" src="./images/230x0w (3).webp"></img>
                <img className="havilaItem" alt="havilaLogo" src="./images/230x0w (4).webp"></img>

            </div>

        </div>

    )
}

export default Havila