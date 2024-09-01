import logoImg from './../../img/icons/Vector.svg';
import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.header_row}>
                    <div className={styles.header_logo}>
                        <img src={logoImg} alt="logo" />
                        <span>Fashion</span>
                    </div>
                    <div className={styles.header_nav}>
                        <ul>
                            <li><a href="#!">CATALOGUE</a></li>
                            <li><a href="#!">FASHION</a></li>
                            <li><a href="#!">FAVOURITE</a></li>
                            <li><a href="#!">LIFESTYLE</a></li>
                            <li><a href="#!" className={styles.header_nav_btn}>SIGN UP</a></li>
                        </ul>
                    </div> 
                </div>
            </div>
        </header>
    );
}

export default Header;
