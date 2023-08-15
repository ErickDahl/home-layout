import styles from "./cards.module.css";
import { Card } from "./Card";
import iconImport from "../../assets/images/QTFwPmU.png";
import iconStock from "../../assets/images/5GTW9ii.png";
import iconExchange from "../../assets/images/sxrqa57.png";
import iconOff from "../../assets/images/pyNUUin.png";
import iconDelivery from "../../assets/images/o6jS7Gc.png";

const Cards = () => {
  const data = [
    {
      image: iconImport,
      title: "Produtos importados",
      subtitle: "Produto de Alta Qualidade",
    },
    {
      image: iconStock,
      title: "Estoque no Brazil",
      subtitle: "Produtos mais perto de vocé!",
    },
    {
      image: iconExchange,
      title: "Trocas Garantidas",
      subtitle: "Trocas em até 48 horas, vejas as regras",
    },
    {
      image: iconOff,
      title: "Ganhe 5% off",
      subtitle: "Pagando à vista no Cartão",
    },
    {
      image: iconDelivery,
      title: "Frete Grátis",
      subtitle: "Em compras acima de R$ 499,00",
    },
  ];

  return (
    <div className={styles.cardsContainer}>
      <p className={styles.title}>Por que comprar na Maeztra?</p>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export { Cards };
