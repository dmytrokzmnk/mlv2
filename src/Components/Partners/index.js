import style from "./style.module.css";
import pic from "../../images/icons/Auchan.svg";
import pic2 from "../../images/icons/metro.svg";
import pic3 from "../../images/icons/Silpo.svg";
import pic4 from "../../images/icons/novus.svg";

const Partners = () => {
  return (
    <section className={style.section}>
      <div className={style.wrap}>
        <img src={pic} alt="test" className={style.sliderImg} />
      </div>
      <div className={style.wrap}>
        <img src={pic2} alt="test" className={style.sliderImg} />
      </div>
      <div className={style.wrap}>
        <img src={pic3} alt="test" className={style.sliderImg} />
      </div>
      <div className={style.wrap}>
        <img src={pic4} alt="test" className={style.sliderImg} />
      </div>
    </section>
  );
};

export default Partners;
