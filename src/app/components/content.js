
import styles from './content.module.css';

const Page2 = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.textContainer}>
                <p className={styles.subtitle}>• What We Do •</p>
                <h1 className={styles.heading}>
                    We empower business with <span className={styles.highlight}>AI </span>
                </h1>
                <h2 className={styles.subHeading}> We use cutting-edge tools.</h2>
                <p className={styles.description}>
                    Automation and <span className={styles.highlight}>streamlining tasks</span> is the core foundation of our products.
                </p>
            </div>
        </div>
    );
};

export default Page2;
