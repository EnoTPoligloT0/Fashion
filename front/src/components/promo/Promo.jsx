import styles from './Promo.module.css'
import promoImg from '../../img/images/promo-brand.png'

function Promo() {
    return (<section className={styles.promo}>
        <div className="container">
            <div className={styles.promoContent}>
                <div className={styles.promoText}>

                    <div className={styles.promoTitle}>
                        <span className="highlight">
                            <span>LET’S</span>
                        </span>
                        EXPLORE

                        <span className={`${"highlight"} ${"highlight_yellow"}`}>
                            <span>UNIQUE</span>
                        </span>

                        CLOTHES.
                    </div>

                    <div className={styles.promoDesc}>
                        Live for Influential and Innovative fashion!
                    </div>

                    <div className={styles.promoBtnWrapper}>
                        <a href="#!" className={styles.promo_btn}>
                            Shop Now
                        </a>
                    </div>

                </div>
                <div className={styles.promoImg}>
                    <img src={promoImg} alt="promo"/>
                </div>
            </div>
        </div>
    </section>);
}

export default Promo;