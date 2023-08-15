import maeztraLogo from "../../assets/images/logo-maeztra-novo.png";
import iconShoppingBag from "../../assets/svgs/icon-shoppingbag.svg";
import iconUser from "../../assets/svgs/icon-user.svg";
import iconHeart from "../../assets/svgs/icon-heart.svg";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <a className={styles.logoLink} href="/">
        <img src={maeztraLogo} className={styles.maeztraLogo} alt="logo" />
      </a>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="O que você busca?"
        />
        <button className={styles.searchButton}>Buscar</button>
      </div>
      <div className={styles.containerHeaderActions}>
        <div className={styles.leftActions}>
          <div className={styles.login}>
            <img src={iconUser} alt="minha conta" />
            <span>Minha conta</span>
          </div>
          <div className={styles.wishlist}>
            <img src={iconHeart} alt="minha conta" />
            <span>Favoritos</span>
          </div>
        </div>
        <div className={styles.cart}>
          <img src={iconShoppingBag} alt="minha conta" />
          <span>Meu Carrinho</span>
        </div>
      </div>
    </header>
  );
};

export { Header };
