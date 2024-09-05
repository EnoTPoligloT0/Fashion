import styles from './Favorite.module.css'
import promo01Img from "../../img/images/promo-01.png"
import promo02Img from "../../img/images/promo-02.png"
import Card from "../Card/Card.jsx";
function Favorite(title, img) {
    return (
        <section className={styles.favorites}>
            <div className="container">
                <div className={styles.favoritesHeader}>
                    <h2 className="title2">Young’s Favourite</h2>
                    
                    <div className={styles.favoritesCards}>
                        <div><Card title={"Trending on instagram"} img={promo01Img}/></div>
                        <div><Card title={"All Under $40"} img={promo02Img}/></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Favorite;