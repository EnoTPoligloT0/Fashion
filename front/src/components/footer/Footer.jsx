import styles from "./Footer.module.css";

import facebookIcon from '../../img/socials/facebook.png'
import instagramIcon from '../../img/socials/inst.png'
import twitterIcon from '../../img/socials/twitter.png'
import linkedinIcon from '../../img/socials/linkedin.png'
function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.fashion}>
                    <h3>FASHION</h3>
                    <p>Complete your style with awesome clothes from us.</p>
                    <div className={styles.socialIcons}>
                        <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
                        <a href="#"><img src={instagramIcon} alt="Instagram"/></a>
                        <a href="#"><img src={twitterIcon} alt="Twitter"/></a>
                        <a href="#"><img src={linkedinIcon} alt="LinkedIn"/></a>
                    </div>
                </div>

                <div className={styles.information}>
                    
                    <div className={styles.company}>
                        <ul>
                            <li><a href="#" className={styles.mainInf}>Company</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.links}>
                        <ul>
                            <li><a href="#" className={styles.mainInf}>Quick Link</a></li>
                            <li><a href="#">Share Location</a></li>
                            <li><a href="#">Orders Tracking</a></li>
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    
                    <div className={styles.legal}>
                        <div className={styles.legalSection}>
                            <ul>
                                <li><a href="#" className={styles.mainInf}>Legal</a></li>
                                <li><a href="#">Terms & conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;