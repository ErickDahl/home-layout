import { FooterMenu } from "./footerMenu";
import styles from "./footerTop.module.css";

const FooterTop = () => {
  const menudata1 = [
    { id: "item1", value: "Quem Somos" },
    { id: "item2", value: "Prazo de Envio" },
    { id: "item3", value: "Trocas e Devoluções" },
    { id: "item4", value: "Promoções e Cupons" },
  ];

  const menudata2 = [
    { id: "item1", value: "Minha Conta" },
    { id: "item2", value: "Meus Pedidos" },
    { id: "item3", value: "Cadastre-se" },
  ];

  const menudata3 = [
    { id: "item1", value: "Lojas" },
    { id: "item2", value: "Endereço" },
  ];

  return (
    <div className={styles.footerMenusContainer}>
      <FooterMenu title="Informações" items={menudata1} />
      <FooterMenu title="Minha Conta" items={menudata2} />
      <FooterMenu title="Onde nos Encontrar" items={menudata3} />
    </div>
  );
};

export { FooterTop };
