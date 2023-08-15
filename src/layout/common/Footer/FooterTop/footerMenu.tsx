import { FC } from "react";
import styles from "./footerTop.module.css";

interface FooterMenuProps {
  title: string;
  items: {
    id: string;
    value: string;
  }[];
}

const FooterMenu: FC<FooterMenuProps> = ({ title, items }) => {
  return (
    <div className={styles.footerMenuContainer}>
      <p className={styles.menuTitle}>{title}</p>
      <div className={styles.menuItemsContainer}>
        {items.map((item) => (
          <span className={styles.menuItem} key={item.id}>{item.value}</span>
        ))}
      </div>
    </div>
  );
};

export { FooterMenu };
