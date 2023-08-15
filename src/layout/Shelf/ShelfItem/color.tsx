import { FC } from "react";
import styles from "./shelfItem.module.css";

interface ColorProps {
  backgroundColor: string;
}

const Color: FC<ColorProps> = ({ backgroundColor }) => {
  return (
    <div
      className={styles.color}
      style={{ backgroundColor: backgroundColor }}
    ></div>
  );
};

export { Color };
