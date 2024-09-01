import styles from './Promo.module.css'
import promoImg from '../../img/images/promo-brand.png'

function Promo() {
    return (<section className={styles.promo}>
        <div className="container">
            <div className={styles.promo_content}>
                <div className={styles.promo_text}>

                    <div className={styles.promo_title}>
                        <span className={styles.highlight}>
                            <span>LET’S</span>
                        </span>
                        EXPLORE

                        <span className={`${styles.highlight} ${styles.highlight_yellow}`}>
                            <span>UNIQUE</span>
                        </span>

                        CLOTHES.
                    </div>

                    <div className={styles.promo_desc}>
                        Live for Influential and Innovative fashion!
                    </div>

                    <div className={styles.promo_btn_wrapper}>
                        <a href="#!" className={styles.promo_btn}>
                            Shop Now
                        </a>
                    </div>

                </div>
                <div className={styles.promo_img}>
                    <img src={promoImg} alt="promo"/>
                </div>
            </div>
        </div>
    </section>);
}

export default Promo;