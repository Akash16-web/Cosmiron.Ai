import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>COSMIRON AI</h1>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.primaryText}>Empower Your Business With </h1>
          <h1 className={styles.secondaryText}>
            <span className={styles.highlight}></span> 
          </h1>
          <h1 className={styles.highlight}>AI & Automation</h1>

          <div className={styles.buttonContainer}>
            <button className={styles.transformButton}>
              TRANSFORM YOUR BUSINESS
            </button>
            <button className={styles.contactButton}>CONTACT US</button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          2025 COSMIRON AI. ALL RIGHTS RESERVED
        </p>

        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>
            TERMS & CONDITIONS
          </a>
          <a href="#" className={styles.legalLink}>
            PRIVACY POLICY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
