import styles from "./styles.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, isOpen] = useState(false);

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
            <li className={styles.item} onClick={() => isOpen(!open)}>
              <Link to="/">Головна</Link>
            </li>
            <li className={styles.item} onClick={() => isOpen(!open)}>
              <Link to="clear">Про нас</Link>
            </li>
            <li className={styles.item} onClick={() => isOpen(!open)}>
              <Link to="list">Морьскі делікатеси</Link>
            </li>
            <li className={styles.item} onClick={() => isOpen(!open)}>
              <Link to="list">Чорна ікра</Link>
            </li>
            <li className={styles.item} onClick={() => isOpen(!open)}>
              <Link to="list">Червона ікра</Link>
            </li>
            <li className={styles.item} onClick={() => isOpen(!open)}>
              <Link to="clear">Для бізнесу</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
