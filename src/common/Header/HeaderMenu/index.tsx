import styles from "./headerMenu.module.css";
import iconDress from "../../../assets/svgs/icon-dress.svg";

const HeaderMenu = () => {
  return (
    <ul className={styles.headerMenuContainer}>
      <li className={styles.headerMenuItemActive}>
        <img src={iconDress} alt="dress" />
        Novidades
      </li>
      <li className={styles.headerMenuItem}>Vestidos</li>
      <li className={styles.headerMenuItem}>Roupas</li>
      <li className={styles.headerMenuItem}>Sapatos</li>
      <li className={styles.headerMenuItem}>Lingerie</li>
      <li className={styles.headerMenuItem}>Acessórios</li>
      <li className={styles.headerMenuItem}>OUTLET</li>
    </ul>
  );
};

export { HeaderMenu };
