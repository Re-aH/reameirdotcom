import SocialLinks from './SocialLinks';
import { Link } from 'react-router-dom'

const Footer = () => {
    function privacyPolicyClicked() {
        console.log('PrivacyPolicy was clicked!!');
    }

    return (
        <div footer className="footer">
            <SocialLinks />
            <footer className='policy' onClick={privacyPolicyClicked}>
                <Link to="/privacy-policy">privacy policy</Link>
            </footer>
        </div>

    )

}

export default Footer