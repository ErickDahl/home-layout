import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import sliderImage from "../../assets/images/ftECh3G.png";
import styles from "./slider.module.css";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.slider}
    >
      <div className={styles.overlaySlider}>
        <span className={styles.overlayTitle}>Promoções de Outono</span>
        <span className={styles.overlaySubtitle}>
          Confiras os melhores looks para combinar com você nesse Outono
        </span>
        <button className={styles.overlayButton}>Conferir</button>
      </div>
      <SwiperSlide>
        <img src={sliderImage} alt="slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImage} alt="slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImage} alt="slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImage} alt="slider image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sliderImage} alt="slider image" />
      </SwiperSlide>
    </Swiper>
  );
};

export { Slider };
