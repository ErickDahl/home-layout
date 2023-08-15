import styles from "./brands.module.css";
import brand1 from "../../assets/images/Qoc0YF7.png";
import brand2 from "../../assets/images/cHLLxR4.png";
import brand3 from "../../assets/images/JOTNQgl.png";
import brand4 from "../../assets/images/PN0nOAY.png";
import brand5 from "../../assets/images/qZ1WvYA.png";

const Brands = () => {
  const images = [
    { id: "a", src: brand1 },
    { id: "b", src: brand2 },
    { id: "c", src: brand3 },
    { id: "d", src: brand4 },
    { id: "e", src: brand5 },
  ];

  return (
    <div className={styles.brandsContainer}>
      <p className={styles.brandsTitle}>Marcas Parceiras</p>

      <div className={styles.brandsImagesContainer}>
        {images.map((image) => (
          <div key={image.id}>
            <img className={styles.brandsImage} src={image.src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export { Brands };
