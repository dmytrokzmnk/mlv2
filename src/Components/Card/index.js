import style from "./style.module.css";

const Card = ({ img, alt, name, caption }) => {
  return (
    <>
      <div className={style.card}>
        <img src={img} alt={alt} className={style.img} />
        <h2 className={style.title}>{name}</h2>
        <p className={style.caption}>{caption}</p>
        <div className={style.button}>
          <p>Перейти</p>
        </div>
      </div>
    </>
  );
};

export default Card;
