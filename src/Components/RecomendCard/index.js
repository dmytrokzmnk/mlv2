import style from "./style.module.css";
import { Link } from "react-router-dom";

const RecomendCard = ({ img, alt, name }) => {
  return (
    <div className={style.container}>
      <div className={style.wrapContent}>
        <img className={style.image} src={img} alt={alt} />
        <div className={style.wrapDecoration1}></div>
        <div className={style.wrapDecoration2}></div>

        <div className={style.wrapTitle}>
          <h3 className={style.title}>{name}</h3>
        </div>
        <Link to="product" className={style.button}>
          Деталі
        </Link>
      </div>
    </div>
  );
};

export default RecomendCard;
