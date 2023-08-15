import styles from "./footer.module.css";
import { FooterTop } from "./FooterTop";
import { FooterBottom } from "./FooterBottom";

const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <FooterTop />
      <FooterBottom />
    </footer>
  );
};

export { Footer };
