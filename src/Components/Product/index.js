import style from "./style.module.css";
import pic from "../../images/keta.jpg";
const Product = () => {
  return (
    <div className={style.container}>
      <img src={pic} alt={1} className={style.image} />

      <div className={style.wrapContent}>
        <h2 className={style.title}>Ікра Кети</h2>
        <p className={style.text}>
          Ікра кети — один з найкращих лососевих делікатесів. Її можна впізнати
          по темно-помаранчевому відтінку та дуже великими ікринками. Вони легко
          відокремлюються одна від одної, а окремі ікринки лопаються на язиці,
          створюючи незабутні смакові відчуття. Яскраві перли ікри кети
          прикрасять будь-який святковий стіл.
        </p>
        <p className={style.certificate}>Продукт сертифіковано в Україні.</p>
        <div>
          <p className={style.tthItem}>
            Виробництво: <span>Erste Kaviar (Deutschland)</span>
          </p>
          <p className={style.tthItem}>
            Склад: <span>ікра кети, сіль, сорбінова кислота</span>
          </p>
          <p className={style.tthItem}>
            Консервант:
            <span>
              сорбінова кислота Е-200 — витяжка з горобини, яка сприяє кращому
              збереженню щільності оболонки (сухості) ікри і смакових якостей в
              процесі її зберігання. 100% натуральний і корисний
            </span>
          </p>
          <p className={style.tthItem}>
            Упаковка: <span>скляна банка з твіст-кришкою</span>
          </p>
          <p className={style.tthItem}>
            Термін придатності: <span>до 12 місяців</span>
          </p>
          <p className={style.tthItem}>
            Температура зберігання: <span>від 0°С до +4°С</span>
          </p>
          <p className={style.tthItem}>
            Місце вилову: <span> Аляска (США)</span>
          </p>
          <p className={style.tthItem}>
            Колір: <span>від янтарного до помаранчевого</span>
          </p>
          <p className={style.tthItem}>
            Розмір зерна: <span>від 6 до 7 міліметрів</span>
          </p>
          <p className={style.tthItem}>
            Спосіб отримання ікри: <span>забій</span>{" "}
          </p>
          <p className={style.tthItem}>
            Вилов: <span>дикий</span>
          </p>
          <p className={style.tthItem}>
            Сорт: <span>вищий</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
