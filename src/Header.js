import { Link } from 'react-router-dom'
import hamImg from './images/ham-menu-64.png'

const Header = () => {

    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

    function dispDropItems() {
        if (document.querySelector(".dropdown").classList.contains('showDrop')) {
            hideDropItems()
        }
        else {
            document.querySelector(".dropdown").classList.add('showDrop')
            document.querySelector(".dropdown").classList.remove('hideDrop')
        }
    }

    function hideDropItems() {
        document.querySelector(".dropdown").classList.remove('showDrop')
        document.querySelector(".dropdown").classList.add('hideDrop')
    }




    // Close the dropdown menu if the user clicks outside of it



    function dipsHamItems() {
        if (document.querySelector(".ham").classList.contains('show')) {
            hideHamItems()
        }
        else {
            document.querySelector(".ham").classList.add('show')
            document.querySelector(".ham").classList.remove('hide')
        }
    }

    function hideHamItems() {
        document.querySelector(".ham").classList.remove('show')
        document.querySelector(".ham").classList.add('hide')
    }




    function closeWelcomeMsg() {

        document.querySelector(".coockieMsg").style.display = "none"

    }
    return (
        <div >
            <nav className='nav'>
                <ul className='nav-items left'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/onkeylite">OnKey</Link></li>
                    <li><Link to="/upbeatmetronome">Upbeat-Metronome</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/reameirgroup">Rea Meir Group</Link></li>
                    {/* <div className="dropdown hideDrop">
                        <li className="dropbtn" onClick={dispDropItems}>Apps</li>
                        <li onClick={hideDropItems}><Link to="/onkeylite">OnKey</Link></li>
                        <li onClick={hideDropItems}><Link to="/upbeatmetronome">Upbeat-Metronome</Link></li>
                    </div>
                    <div className="dropdown hideDrop">
                        <li className="dropbtn" onClick={dispDropItems}>Music</li>
                        <li><Link to="/music">Audio</Link></li>
                        <li><Link to="/videos">Video</Link></li>
                        <li><Link to="/reameirgroup">Rea Meir Group</Link></li>
                    </div> */}
                </ul>
                <ul className='nav-items right'>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </nav>

            <nav className='ham burg' >
                <div style={{ "height": "64px" }} onClick={dipsHamItems}>
                    <img src={hamImg} alt="burger icon" className='hamImg' />
                </div>
                <ul className='ham-items' onClick={hideHamItems}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/onkeylite">OnKey</Link></li>
                    <li><Link to="/upbeatmetronome">Upbeat-Metronome</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/reameirgroup">Rea Meir Group</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </nav>




            <div className="coockieMsg ">
                {/* <btn className="coockiexBtn" onClick={closeWelcomeMsg}>X</btn> */}

                {/* <h1 className="onkeyHeader">OnKey - Scale Practice</h1> */}
                <div className="coockieText">We collect cookies to analyze our website traffic & performance; we never collect any personal data.
                </div>
                <div className="coockieBtn" onClick={closeWelcomeMsg}>
                    <div >Accept cookies</div>

                </div>
            </div>
        </div >
    )
}

export default Header