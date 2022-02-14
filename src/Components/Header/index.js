import styles from "./styles.module.css";
import burgerB from "../../images/icons/Vector.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.link} href="/">
        More love
      </a>

      <img alt="burger" className={styles.burger} src={burgerB}></img>
    </header>
  );
};

export default Header;
