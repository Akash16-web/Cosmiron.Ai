import styles from './index.module.css';
import Chatbot from './Chatbot';
import WhatsAppButton from './whatsappbutton';

const Index = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                One <span className={styles.purpleText}>Suite</span> <br />
                For <br />
                All <span className={styles.purpleText}>Your</span> Needs
            </h1>

            <p className={styles.description}>
                Cosmiron AI is your all-in-one solution 
                Our platform leverages advanced AI technology
            </p>

            <button className={styles.button}>TRANSFORM YOUR BUSINESS</button>

            {/* Icons Grid */}
            <div className={styles.iconGrid}>
                <div className={styles.iconBox}>
                    <i className={`fas fa-id-card ${styles.icon}`}></i> 
                </div>
                <div className={styles.iconBox}>
                    <i className={`fas fa-file-invoice ${styles.icon}`}></i> 
                </div>
                <div className={styles.iconBox}>
                    <i className={`fas fa-user-tie ${styles.icon}`}></i> 
                </div>
                <div className={styles.iconBox}>
                    <i className={`fas fa-file-alt ${styles.icon}`}></i> 
                </div>
            </div>
            <Chatbot />
            <WhatsAppButton/>
        </div>
    );
};

export default Index;


