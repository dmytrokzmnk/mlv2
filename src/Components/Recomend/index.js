import RecomendCard from "../RecomendCard";
import style from "./style.module.css";
import pic from "../../images/squid1.png";
import pic2 from "../../images/shrimp.png";

const Recomend = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Рекомендасьйон</h2>
      <div className={style.wrapCard}>
        <RecomendCard img={pic} alt={"test"} name={"Кальмар в олії"} />
        <RecomendCard img={pic2} alt={"test"} name={"Креветка в чилі"} />
        <RecomendCard img={pic2} alt={"test"} name={"Креветка в чилі"} />
        <RecomendCard img={pic} alt={"test"} name={"Кальмар в олії"} />
      </div>
    </section>
  );
};

export default Recomend;
