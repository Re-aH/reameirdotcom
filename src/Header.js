import { Link } from 'react-router-dom'

const Header = () => {

    function closeWelcomeMsg() {
        document.querySelector(".coockieMsg").style.display = "none"
    }
    return (
        <header >
            <nav className='nav'>

                <ul className='nav-items left'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/onkeylite">OnKey</Link></li>
                    <li><Link to="/upbeatmetronome">Upbeat-Metronome</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/videos">Videos</Link></li>
                    <li><Link to="/reameirgroup">Rea Meir Group</Link></li>
                </ul>
                <ul className='nav-items right'>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </nav>
            <div className="coockieMsg ">
                {/* <btn className="coockiexBtn" onClick={closeWelcomeMsg}>X</btn> */}

                {/* <h1 className="onkeyHeader">OnKey - Scale Practice</h1> */}
                <div className="coockieText">We collect cookies to analyze our website traffic and performance; we never collect any personal data.
                </div>
                <btn className="coockieBtn" onClick={closeWelcomeMsg}>Accept coockies</btn>
            </div>
        </header>
    )
}

export default Header