import React from "react"
import SocialLinks from "../SocialLinks"
import { Helmet } from "react-helmet"
const OnKeyLite = () => {

    function closeWelcomeMsg() {
        document.querySelector(".onkeyWelcome").style.display = "none"
    }

    return (<>
        <Helmet>
            <title>OnKey Lite - Scale Practice</title>
            <meta name="description" content="An exercise generator, designed to aid with scale and chord practice for musicians of all levels." />
        </Helmet>
        <div className="onkeyWelcome">
            <btn className="xBtn" onClick={closeWelcomeMsg}>X</btn>
            <img alt="cover" src="../images/onkeycover.jpg" className="coverImg"></img>
            {/* <h1 className="onkeyHeader">OnKey - Scale Practice</h1> */}
            <div className="onkeyText"><span className="aa">"OnKey - Scale Practice" - designed to aid with scale and chord practice for musicians of all levels.</span> <br />
                <span className="bb">An exercise generator that will give you the <em> NOTES</em> for your daily practice.</span><br />
                <span className="cc">Focus on execution, the <em>HOW</em>, and less on <em>WHAT</em> to play.</span><br />
                <span className="dd">Minimize the need for paper or method books.</span> <br />
                <span className="ee">a <em>FREE</em> version called "OnKeyLite" is available both here and on the <a href="https://apps.apple.com/us/app/onkey-lite-scale-practice/id1638630839" rel="noreferrer" target="_blank" className="green">App Store</a>  and <a href="https://play.google.com/store/apps/details?id=com.reameir.onkeylite" rel="noreferrer" target="_blank" className="green">Google Play.</a></span> </div>
            <btn className="welcomeBtn" onClick={closeWelcomeMsg}>Try OnKeyLite</btn>
        </div>
        <iframe title="OnKeyLite" src="https://re-ah.github.io/onkeyliteweb/"></iframe>
        <SocialLinks />
    </>
    )
}

export default OnKeyLite