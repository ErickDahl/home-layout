import styles from "./headerAlert.module.css";

const HeaderAlert = () => {
  return (
    <div className={styles.headerAlertContainer}>
      <span className={styles.headerAlertTitle}>
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </span>
    </div>
  );
};

export { HeaderAlert };
