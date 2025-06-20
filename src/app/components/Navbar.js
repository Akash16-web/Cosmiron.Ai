import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigateToLogin = () => {
    // Redirect to the login page
    window.location.href = '/login';
};

const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo} onClick={scrollToTop}>
          Cosmiron <span className={styles.blueText}>AI</span>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <div
            className={styles.dropdown}
          >
            <button
              className={styles.dropdownButton}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <span className={styles.arrow}>▼</span>
            </button>
            <div
              className={`${styles.dropdownMenu} ${servicesOpen ? styles.open : ''}`}
            >
              <a className={styles.menuItem} href="#" onClick={() => setMenuOpen(false)}>Ai Tools</a>
              <a className={styles.menuItem} href="#" onClick={() => setMenuOpen(false)}>Automation</a>
            </div>
          </div>
          <a className={styles.menuItem} href="#" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a className={styles.menuItem} href="AboutUs" onClick={() => setMenuOpen(false)}>About Us</a>
        </div>

        <div className={`${styles.buttons} ${menuOpen ? styles.open : ''}`}>
          <button className={styles.loginButton} onClick={navigateToLogin} >Login</button>
          <button className={styles.startButton}>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
