import styles from './Carousel.module.css';

const cardData = [
    {
        icon: 'fas fa-magic',
        title: 'AI-Driven Compliance Automation',
        description:
            'Say goodbye to manual processes. Our AI-powered tools automate compliance workflows, risk assessments, and audit trails—reducing human error and saving valuable time.',
    },
    {
        icon: 'fas fa-exclamation-triangle',
        title: 'Real-Time Risk Monitoring & Alerts',
        description:
            'We provide continuous compliance monitoring with real-time alerts, ensuring businesses can identify and mitigate risks before they become major issues.',
    },
    {
        icon: 'fas fa-magic',
        title: 'AI-Driven Compliance Automation',
        description:
            'Say goodbye to manual processes. Our AI-powered tools automate compliance workflows, risk assessments, and audit trails—reducing human error and saving valuable time.',
    },
    {
        icon: 'fas fa-exclamation-triangle',
        title: 'Real-Time Risk Monitoring & Alerts',
        description:
            'We provide continuous compliance monitoring with real-time alerts, ensuring businesses can identify and mitigate risks before they become major issues.',
    },
    {
        icon: 'fas fa-magic',
        title: 'AI-Driven Compliance Automation',
        description:
            'Say goodbye to manual processes. Our AI-powered tools automate compliance workflows, risk assessments, and audit trails—reducing human error and saving valuable time.',
    },
    
];

const Carousel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textCenter}>
                <p className={styles.uppercaseText}>~ Why Choose Us ~</p>
                <h1 className={styles.title}>
                    Offering <span className={styles.fontBold}>Advanced</span> Solutions with{' '}
                    <span className={styles.fontBold}>Accuracy & Efficiency</span>.
                </h1>
                <p className={styles.description}>
                    At Cosmiron Ai, we combine deep compliance expertise with cutting-edge technology to help businesses streamline audits,
                    manage risks, and stay ahead of regulatory challenges.
                </p>
            </div>
            <div className={styles.scrollingWrapper}>
                {cardData.map((card, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>
                            <i className={card.icon}></i>
                        </div>
                        <h2 className={styles.cardTitle}>{card.title}</h2>
                        <p className={styles.cardDescription}>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
