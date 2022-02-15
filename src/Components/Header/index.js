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
      <div>
        <div
          className={
            open ? [styles.overlay, styles.active].join(" ") : styles.overlay
          }
        ></div>
        <div
          className={
            open ? [styles.menu, styles.active].join(" ") : styles.menu
          }
        >
          <ul
            className={
              open ? [styles.list, styles.active].join(" ") : styles.list
            }
          >
            <li className={styles.item}>Головна</li>
            <li className={styles.item}>Про нас</li>
            <li className={styles.item}>Морьскі делікатеси</li>
            <li className={styles.item}>Чорна ікра</li>
            <li className={styles.item}>Червона ікра</li>
            <li className={styles.item}>Для бізнесу</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
