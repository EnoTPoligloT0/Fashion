import styles from './Sale.module.css'
import salePaydayImg from '../../img/images/payday-sale.png'

function Sale() {
    return (
        <section className={styles.sale}>
            <div className="containerFHD">
                <div className={styles.saleContent}>
                    <div className={styles.saleImg}>
                        <img src={salePaydayImg} alt="logo"/>
                    </div>
                    <div className={styles.saleInfo}>
                        <div className={styles.saleText}>
                            <div className={styles.saleTitle}>
                                <span className={`${"highlight"} ${"highlightWhite"}`}>PAYDAY</span>
                                SALE NOW
                            </div>
                            <div className={styles.saleDetails}>Spend minimal $100 get 30% off
                                voucher code for your next purchase
                            </div>
                            <div className={styles.saleDates}>1 June - 10 June 2021</div>
                            <div className={styles.saleTerms}>*Terms & Conditions apply</div>
                            <div className={styles.saleBtnWrapper}>
                                <a href="#!" className={styles.saleBtn}>SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sale;