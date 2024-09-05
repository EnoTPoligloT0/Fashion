import styles from "./Card.module.css";

import arrowImg from "../../img/icons/arrow.svg"

const Card = ({title, img}) => {
    
    return (
        <div className={styles.card}>

            <a href="" className={styles.cardLink}></a>
            
            <img className={styles.cardImg} src={img} alt="Category ..."/>
        
            <div className={styles.cardBody}>

                <div className={styles.cardText}>
                    
                    <div className={styles.cardTitle}>{title}</div>
                        
                    <div className={styles.cardMuted}>Explore Now!</div>
                        
                </div>

                <div className={styles.cardIcon}>
                    <img src={arrowImg} alt="Open"/>
                </div>
                
            </div>
            
        </div>)
}

export default Card;