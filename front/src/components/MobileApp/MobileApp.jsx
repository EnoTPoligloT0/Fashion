import styles from './MobileApp.module.css'
import phoneImg from '../../img/images/phone.png'
import googlePlayImg from '../../img/icons/google-play.png'
import appStoreImg from '../../img/icons/app-store.png'
function MobileApp() {
    return (
        <section className={styles.mobile}>
            <div className={styles.mobileContainer}>
                <div className={styles.mobileContent}>
                    
                    <div className={styles.mobileText}>
                        <div className={styles.mobileTitle}>
                            DOWNLOAD APP & GET THE VOUCHER!</div>
                        <div className={styles.mobileDesc}>
                            Get 30% off for first transaction using
                            Rondovision mobile app for now.</div>
                        <div className={styles.mobileIcons}>
                            <ul className={styles.mobileList}>
                                <li><a href="#!"><img src={googlePlayImg} alt=""/></a></li>
                                <li><a href="#!"><img src={appStoreImg} alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className={styles.mobileImg}>
                        <img src={phoneImg} alt={"Phone image"}/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MobileApp;