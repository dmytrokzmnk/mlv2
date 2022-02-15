import Card from "../Card";
import style from "./style.module.css";
import pic from "../../images/sc.jpg";
import pic2 from "../../images/scu.jpg";
import pic3 from "../../images/om.jpg";

const ListCard = () => {
  return (
    <div className={style.container}>
      <Card img={pic} alt={"test"} name={"Кільця кальмара"} caption={"олія"} />
      <Card
        img={pic2}
        alt={"test"}
        name={"Кільця кальмара"}
        caption={"соус унагі"}
      />
      <Card img={pic3} alt={"test"} name={"Восьминіг міні"} caption={"олія"} />
      <Card img={pic} alt={"test"} name={"Кільця кальмара"} caption={"олія"} />
      <Card
        img={pic2}
        alt={"test"}
        name={"Кільця кальмара"}
        caption={"соус унагі"}
      />
      <Card img={pic3} alt={"test"} name={"Восьминіг міні"} caption={"олія"} />
    </div>
  );
};

export default ListCard;
