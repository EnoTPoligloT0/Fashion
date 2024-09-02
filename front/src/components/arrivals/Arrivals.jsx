import styles from './Arrivals.module.css';
function Arrivals() {
    return (
        <section className={styles.arrivals}>
            <div className="container">
                <div className={styles.arrivals_header}>
                    <h2 className={styles.title_2}>NEW ARRIVALS</h2>
                </div>
                <div className={styles.arrivals_cards}>
                    <div>CARD 1</div>
                    <div>CARD 2</div>
                    <div>CARD 3</div>
                </div>
            </div>
        </section>
    );
}

export default Arrivals;