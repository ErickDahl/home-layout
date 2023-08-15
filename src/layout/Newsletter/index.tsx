import styles from "./newsletter.module.css";

const Newsletter = () => {
  return (
    <div className={styles.containerNewsletter}>
      <div className={styles.titleContainer}>
        <span className={styles.titleNewsletter}>Recebe Nossa Newsletter</span>
      </div>
      <div className={styles.emailContainer}>
        <input
          className={styles.emailInput}
          type="text"
          placeholder="Digite seu email"
        />
        <button className={styles.buttonNewsletter}>Enviar</button>
      </div>
    </div>
  );
};

export { Newsletter };
