import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import ContactForm from './pages/ContactForm';
import HomePageContent from './pages/HomePageContent'
import OnKeyLite from './pages/OnKeyLite';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Music from './pages/Music';
import ReaMeirGroup from './pages/ReaMeirGroup';
import Videos from './pages/Videos';
import UpbeatMetronome from './pages/UpbeatMetronome';
import Thankyou from './pages/Thankyou';
// import ReactAudioPlayer from 'react-audio-player';


const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePageContent />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/onkeylite" element={<OnKeyLite />} />
                {/* to not brake google results */}
                <Route path="/onkey" element={<OnKeyLite />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/thankyou" element={<Thankyou />} />
                <Route path="/music" element={<Music />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/reameirgroup" element={<ReaMeirGroup />} />
                <Route path="/upbeatmetronome" element={<UpbeatMetronome />} />
            </Routes>
        </Router>
    );
}

export default App;

