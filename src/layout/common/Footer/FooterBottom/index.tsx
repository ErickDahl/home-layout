import styles from "./footerBottom.module.css";
import iconFacebook from "../../../../assets/svgs/facebook.com.svg";
import iconLinkedin from "../../../../assets/svgs/www.linkedin.com.svg";
import iconInstagram from "../../../../assets/svgs/www.instagram.com.svg";
import iconYoutube from "../../../../assets/svgs/www.youtube.com.svg";
import iconMastercard from "../../../../assets/svgs/mastercard.svg";
import iconVisa from "../../../../assets/svgs/visa.svg";
import iconVtex from "../../../../assets/images/logo-footer.png";
import logoFooter from "../../../../assets/images/Maeztra-Logo-cor.png";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottomContainer}>
      <div className={styles.socials}>
        <img src={iconFacebook} />
        <img src={iconLinkedin} />
        <img src={iconInstagram} />
        <img src={iconYoutube} />
      </div>
      <div className={styles.payments}>
        <img src={iconVisa} />
        <img src={iconMastercard} />
        <img src={iconVisa} />
        <img src={iconMastercard} />
      </div>
      <div className={styles.poweredBy}>
        <div className={styles.poweredByContainer}>
          <span className={styles.poweredByText}>Powered by</span>
          <img src={iconVtex} />
        </div>
        <div className={styles.developedByContainer}>
          <span className={styles.developedByText}>Developed by</span>
          <img src={logoFooter} />
        </div>
      </div>
    </div>
  );
};

export { FooterBottom };
