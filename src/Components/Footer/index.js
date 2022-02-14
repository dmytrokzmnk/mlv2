import style from "./style.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.list}>
        <li className={style.item}>
          <h3 className={style.title}>Telegram</h3>
          <a className={style.link}>@morelove</a>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>Viber</h3>
          <a className={style.link}>@morelove</a>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>WhatsApp</h3>
          <a className={style.link}>+380735000505</a>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>Facebook</h3>
          <a className={style.link}>fb.com/morelove.com</a>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>Instagram</h3>
          <a className={style.link}>@morelove</a>
        </li>
        <li className={style.item}>
          <h3 className={style.title}>Email</h3>
          <a className={style.link}>morelove@gmail.com</a>
        </li>
        <li className={style.item}>
          <h3 className={[style.titleLast]}>Mобільний</h3>
          <a className={style.link}>+380735000505</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
