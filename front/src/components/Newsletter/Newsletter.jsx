import styles from './Newsletter.module.css';

function Newsletter() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
            <p className={styles.description}>
                Type your email down below and be young wild generation
            </p>
            <form className={styles.form}>
                <input
                    type="email"
                    className={styles.emailInput}
                    placeholder="Add your email here"
                />
                <a type="submit" className={styles.subscribeButton}>
                    SEND
                </a>
            </form>
        </section>
    );
}

export default Newsletter;
