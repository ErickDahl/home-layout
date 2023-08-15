import { FC } from "react";
import styles from "./shelfItem.module.css";
import { Color } from "./color";

interface ShelfItemProps {
  image: string;
  price: number;
  name: string;
  description: string;
}

const ShelfItem: FC<ShelfItemProps> = ({ image, price, name, description }) => {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className={styles.shelfItemContainer}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.itemInformation}>
        <div className={styles.colorsContainer}>
          <Color backgroundColor="#deac71" />
          <Color backgroundColor="#d37164" />
          <Color backgroundColor="#6497d3" />
          <Color backgroundColor="#3c3b79" />
        </div>
        <span className={styles.price}>{formattedPrice}</span>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
        <button className={styles.buttonAddToCart}>Adicionar</button>
      </div>
    </div>
  );
};

export { ShelfItem };
