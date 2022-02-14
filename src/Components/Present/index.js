import style from "./style.module.css";
const Present = ({ alt, src, title, text, section }) => {
  return (
    <section
      className={[
        style.section,
        section === "black"
          ? style.bg2
          : section === "red"
          ? style.bg3
          : style.bg1,
      ].join(" ")}
    >
      <div className={style.wrapImg}>
        <div
          className={
            section === "black"
              ? style.shapeReverse
              : section === "red"
              ? style.shapeRed
              : style.shape
          }
        ></div>
        <img
          alt={alt}
          src={src}
          className={
            section === "black"
              ? style.imageReverse
              : section === "red"
              ? style.imageRed
              : style.image
          }
        />
      </div>
      <article
        className={section === "black" ? style.articleBlack : style.article}
      >
        <h2 className={style.title}>{title}</h2>
        <p className={style.text}>{text}</p>
        <div className={style.button}>
          <p>Перейти</p>
        </div>
      </article>
    </section>
  );
};

export default Present;
