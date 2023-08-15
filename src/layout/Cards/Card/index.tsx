import { FC } from "react";
import styles from "./card.module.css";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
}

const Card: FC<CardProps> = ({ image, title, subtitle }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} alt="card image" />

      <div className={styles.cardRightContainer}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.cardSubTitle}>{subtitle}</span>
      </div>
    </div>
  );
};

export { Card };
