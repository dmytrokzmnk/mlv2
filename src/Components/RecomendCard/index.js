import style from "./style.module.css";

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
        <div className={style.button}>
          <p>Деталі</p>
        </div>
      </div>
    </div>
  );
};

export default RecomendCard;
