import { Link } from 'react-router-dom';
import hamImg from './images/ham-menu-64.png';
import { useEffect, } from 'react';

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
            hideMusDropItems()
        }
    }

    function hideDropItems() {
        document.querySelector(".dropdown").classList.remove('showDrop')
        document.querySelector(".dropdown").classList.add('hideDrop')
    }

    function dispMusDropItems() {
        if (document.querySelector(".musDrop").classList.contains('showDrop')) {
            hideMusDropItems()
        }
        else {
            document.querySelector(".musDrop").classList.add('showDrop')
            document.querySelector(".musDrop").classList.remove('hideDrop')
            hideDropItems()

        }
    }

    function hideMusDropItems() {
        document.querySelector(".musDrop").classList.remove('showDrop')
        document.querySelector(".musDrop").classList.add('hideDrop')
    }

    function hideBothDrops() {
        hideDropItems()
        hideMusDropItems()
    }

    // const iframeRef = createRef();
    // Close the dropdown menu if the user clicks outside of it
    useEffect(() => {
        const handleClick = (event) => {
            if (!event.target.classList.contains('dropbtn')) {
                hideBothDrops();
                // console.log('clicked else where');
            }
        };

        window.addEventListener('click', handleClick);
        // const iframeDoc = iframeRef.current.contentDocument;
        // console.log(iframeRef);
        // iframeDoc.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener('click', handleClick);
            // iframeDoc.removeEventListener('click', handleClick);
        };
    },);


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



    //uncomment to close cookie msg

    // function closeWelcomeMsg() {

    //     document.querySelector(".coockieMsg").style.display = "none"

    // }
    return (
        <div >
            <nav className='nav'>
                <ul className='nav-items left'>
                    <li className='home' onClick={hideBothDrops}><Link to="/">Home</Link></li>
                    {/* <li><Link to="/onkeylite">OnKey</Link></li>
                    <li><Link to="/upbeatmetronome">Upbeat-Metronome</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/reameirgroup">Rea Meir Group</Link></li> */}
                    <div className="dropdown hideDrop">
                        <li className="dropbtn" onClick={dispDropItems}>Apps</li>
                        <li onClick={hideDropItems}><Link to="/onkeylite">OnKey</Link></li>
                        <li onClick={hideDropItems}><Link to="/upbeatmetronome">UpBeat </Link></li>
                        <li onClick={hideDropItems}><Link to="/flashcards">Practice <br></br>Flashcards</Link></li>
                        <li onClick={hideDropItems}><Link to="/havila">חבילה <br></br>עוברת</Link></li>
                    </div>
                    <div className="dropdown hideDrop musDrop">
                        <li className="dropbtn" onClick={dispMusDropItems}>Music</li>
                        <li onClick={hideMusDropItems}><Link to="/reameirgroup">Rea Meir Music</Link></li>
                        <li onClick={hideMusDropItems}><Link to="/videos">Filmscoring Video</Link></li>
                        <li onClick={hideMusDropItems}><Link to="/music">Filmscoring Audio</Link></li>
                    </div>
                </ul>
                <ul className='nav-items right'>
                    <li onClick={hideBothDrops}><Link to="/contact">Contact</Link></li>
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
                    <li><Link to="/flashcards">Practice Flashcards</Link></li>
                    <li><Link to="/havila">חבילה <br></br>עוברת</Link></li>
                    <li><Link to="/reameirgroup">Rea Meir Music</Link></li>
                    <li><Link to="/videos">Filmscoring Videos</Link></li>
                    <li><Link to="/music">Filmscoring Music</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </nav>



            {/* 
            <div className="coockieMsg ">
    
                <div className="coockieText">We collect cookies to analyze our website traffic & performance; we never collect any personal data.
                </div>
                <div className="coockieBtn" onClick={closeWelcomeMsg}>
                    <div >Accept cookies</div>

                </div>
            </div> */}
        </div >
    )
}

export default Header