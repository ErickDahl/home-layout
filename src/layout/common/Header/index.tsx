import { HeaderAlert } from "./HeaderAlert";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderMiddle } from "./HeaderMiddle";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <HeaderAlert />
      <HeaderMiddle />
      <HeaderMenu />
    </header>
  );
};

export { Header };
