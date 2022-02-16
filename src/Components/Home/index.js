import style from "./style.module.css";
import pic from "../../images/fb1.png";
import pic2 from "../../images/fb2.png";
import pic3 from "../../images/fb3.png";
import pic4 from "../../images/fb4.png";
import Present from "../Present";
import testPic from "../../images/cart4.png";
import testPic2 from "../../images/photo2.png";
import testPic3 from "../../images/red.png";
import Recomend from "../Recomend";
import Partners from "../Partners";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
const Home = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = (e) => {
    const currentScrollY = window.scrollTop;
    console.log(currentScrollY);
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(goingUp, currentScrollY);
  };
  // --------------------------------------------------------------------------
  const myRefRed = useRef(null);
  const myRefMain = useRef(null);

  const firstScroll = () => myRefRed.current.scrollIntoView();
  const secondScroll = () => myRefMain.current.scrollIntoView();

  return (
    <>
      <div className={style.wrapper} onWheel={onScroll}>
        <h1 className={style.title}>Fresh seafood</h1>
        <div className={style.slider}>
          <div className={style.sliderTrack}>
            <div className={style.sliderSlide}>
              <img src={pic} alt="test" className={style.sliderImg} />
            </div>
            <div className={style.sliderSlide}>
              <img src={pic2} alt="test" className={style.sliderImg} />
            </div>
            <div className={style.sliderSlide}>
              <img src={pic3} alt="test" className={style.sliderImg} />
            </div>
            <div className={style.sliderSlide}>
              <img src={pic4} alt="test" className={style.sliderImg} />
            </div>
          </div>
        </div>
        <Link to="clear" className={style.wrapBtn}>
          Для бізнесу
        </Link>
        <p className={style.caption} onClick={firstScroll}>
          більше
        </p>
      </div>
      <div className={[style.wrapper, style.red].join(" ")} ref={myRefRed}>
        <div className={style.wrapText}>
          <h2 className={style.smallTitle}>Чому саме ми?</h2>
          <p className={style.text}>
            Світовий океан - це цілий всесвіт, який досліджений набагато гірше,
            ніж космос. Можна лише здогадуватися у тому, які загадки він ховає.
            Але ми знаємо як знайти в ньому величезну кількість особливих і
            унікальних смаків. <strong>Спробуєте?</strong>
          </p>
        </div>
        <p className={style.caption2} onClick={secondScroll}>
          далі цікавіше
        </p>
      </div>
      <main className={style.main} ref={myRefMain}>
        <Present
          alt={"test"}
          src={testPic}
          title={"Наша продукція"}
          text={
            "Я скажу то, что для тебя не новость. Мир не такой уж солнечный и приветливый. Это очень опасное, жесткое место. И если только дашь слабину, он опрокинет с такой силой тебя, что больше уже не встанешь. Ни ты, ни я, никто на свете не бьет так сильно, как ЖИЗНЬ. Совсем не важно, как ты ударишь, а важно, КАКОЙ ДЕРЖИШЬ УДАР, как двигаешься вперед. Будешь идти – ИДИ, если с испугу не свернешь. Только так побеждают! Если знаешь, чего ты стоишь, иди и бери свое, но будь готов удары держать, а не плакаться и говорить: «Я ничего не добился из-за него, из-за нее, из-за кого-то»! Так делают трусы, а ты не трус! Быть этого не может! …я всегда буду тебя любить, что бы ни случилось. Ты мой сын – плоть от плоти, самое дорогое, что у меня есть. Но пока ты не поверишь в себя, жизни не будет..."
          }
        />
        <Present
          section={"black"}
          alt={"test2"}
          src={testPic2}
          title={"Чорна ікра"}
          text={
            "Я скажу то, что для тебя не новость. Мир не такой уж солнечный и приветливый. Это очень опасное, жесткое место. И если только дашь слабину, он опрокинет с такой силой тебя, что больше уже не встанешь. Ни ты, ни я, никто на свете не бьет так сильно, как ЖИЗНЬ. Совсем не важно, как ты ударишь, а важно, КАКОЙ ДЕРЖИШЬ УДАР, как двигаешься вперед. Будешь идти – ИДИ, если с испугу не свернешь. Только так побеждают! Если знаешь, чего ты стоишь, иди и бери свое, но будь готов удары держать, а не плакаться и говорить: «Я ничего не добился из-за него, из-за нее, из-за кого-то»! Так делают трусы, а ты не трус! Быть этого не может! …я всегда буду тебя любить, что бы ни случилось. Ты мой сын – плоть от плоти, самое дорогое, что у меня есть. Но пока ты не поверишь в себя, жизни не будет..."
          }
        />
        <Present
          section={"red"}
          alt={"test2"}
          src={testPic3}
          title={"Червона ікра"}
          text={
            "Я скажу то, что для тебя не новость. Мир не такой уж солнечный и приветливый. Это очень опасное, жесткое место. И если только дашь слабину, он опрокинет с такой силой тебя, что больше уже не встанешь. Ни ты, ни я, никто на свете не бьет так сильно, как ЖИЗНЬ. Совсем не важно, как ты ударишь, а важно, КАКОЙ ДЕРЖИШЬ УДАР, как двигаешься вперед. Будешь идти – ИДИ, если с испугу не свернешь. Только так побеждают! Если знаешь, чего ты стоишь, иди и бери свое, но будь готов удары держать, а не плакаться и говорить: «Я ничего не добился из-за него, из-за нее, из-за кого-то»! Так делают трусы, а ты не трус! Быть этого не может! …я всегда буду тебя любить, что бы ни случилось. Ты мой сын – плоть от плоти, самое дорогое, что у меня есть. Но пока ты не поверишь в себя, жизни не будет..."
          }
        />
        <Recomend></Recomend>
        <Partners></Partners>
      </main>{" "}
    </>
  );
};

export default Home;
