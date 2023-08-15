import styles from "./banner.module.css";
import banner from "../../assets/images/1vLCv01.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerTextContainer}>
        <p className={styles.bannerTitle}>Lorem ipsum </p>
        <span className={styles.bannerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </span>
      </div>
      <div className={styles.bannerImageContainer}>
        <img className={styles.banner} src={banner} alt="banner" />
      </div>
    </div>
  );
};

export { Banner };
