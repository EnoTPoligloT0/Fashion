import styles from './Arrivals.module.css';
import cat01Img from "../../img/categories/cat-1.png"
import cat02Img from "../../img/categories/cat-2.png"
import cat03Img from "../../img/categories/cat-3.png"
import Card from "../Card/Card.jsx";

function Arrivals() {
    return (
        <section className={styles.arrivals}>
            <div className="container">
                <div className={styles.arrivalsHeader}>
                    <h2 className="title2">NEW ARRIVALS</h2>
                </div>
                <div className={styles.arrivalsCards}>
                    <div><Card title={"Hoodies & Sweatshirt"} img={cat01Img} /></div>
                    <div><Card title={"Coats & Parkas"} img={cat02Img}/></div>
                    <div><Card title={"Tees & T-Shirt"} img={cat03Img}/></div>
                </div>
            </div>
        </section>
    );
}

export default Arrivals;