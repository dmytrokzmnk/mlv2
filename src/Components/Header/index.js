import styles from "./styles.module.css";
import { useState } from "react";
const Header = () => {
  const [open, isOpen] = useState(false);
  console.log(open);
  return (
    <>
      <header className={styles.header}>
        <a className={styles.link} href="/">
          More love
        </a>

        <div className={styles.burgerWrap}>
          <input
            type="checkbox"
            id="menu_checkbox"
            checked={open}
            onChange={() => isOpen(!open)}
            className={styles.input}
          />
          <label htmlFor="menu_checkbox">
            <div></div>
            <div></div>
            <div></div>
          </label>
        </div>
      </header>
      <div
        className={open ? [styles.menu, styles.active].join(" ") : styles.menu}
      ></div>
    </>
  );
};

export default Header;
