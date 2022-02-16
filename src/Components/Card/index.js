import style from "./style.module.css";
import { Link } from "react-router-dom";

const Card = ({ img, alt, name, caption }) => {
  return (
    <>
      <div className={style.card}>
        <img src={img} alt={alt} className={style.img} />
        <h2 className={style.title}>{name}</h2>
        <p className={style.caption}>{caption}</p>
        <Link to="product" className={style.button}>
          Перейти
        </Link>
      </div>
    </>
  );
};

export default Card;
