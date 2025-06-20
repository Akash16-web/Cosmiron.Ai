import styles from './whatsappbutton.module.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/7981536744" // Replace with your WhatsApp number in international format
      className={styles.button}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className={`fab fa-whatsapp ${styles.icon}`} />
    </a>
  );
};

export default WhatsAppButton;
