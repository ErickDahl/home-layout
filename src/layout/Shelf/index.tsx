import { ShelfItem } from "./ShelfItem";
import styles from "./shelf.module.css";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/308x381.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

const Shelf = () => {
  const data = [
    {
      id: "a",
      image: image1,
      price: 4,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    },
    {
      id: "b",
      image: image2,
      price: 4,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
    },
    {
      id: "c",
      image: image1,
      price: 40,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    },
    {
      id: "d",
      image: image2,
      price: 40,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
    },
    {
      id: "e",
      image: image1,
      price: 40,
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    },
    {
      id: "f",
      image: image2,
      price: 40,
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
    },
  ];

  return (
    <div className={styles.shelf}>
      <p className={styles.title}>As Mais Pedidas</p>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <ShelfItem
              image={item.image}
              price={item.price}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { Shelf };
