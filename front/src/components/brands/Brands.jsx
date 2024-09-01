import hmImg from '../../img/brands/brand-1.png'
import shopifyImg from '../../img/brands/brand-2.png'
import amazonImg from '../../img/brands/brand-3.png'
import levisImg from '../../img/brands/brand-4.png'
import obeyImg from '../../img/brands/brand-5.png'
import lacosteImg from '../../img/brands/brand-6.png'

import styles from './Brands.module.css'
function Brands() {
    return (
        <section className={styles.brands}>
            <div className="container">
                <ul className={styles.brands_list}>
                    <li><a href="#!"><img src={hmImg} alt=""/></a></li>
                    <li><a href="#!"><img src={obeyImg} alt=""/></a></li>
                    <li><a href="#!"><img src={shopifyImg} alt=""/></a></li>
                    <li><a href="#!"><img src={lacosteImg} alt=""/></a></li>
                    <li><a href="#!"><img src={levisImg} alt=""/></a></li>
                    <li><a href="#!"><img src={amazonImg} alt=""/></a></li>
                </ul>
            </div>
        </section>
    );
}

export default Brands;