import Header from "./Components/Header";
import pic from "./images/fb1.png";
import pic2 from "./images/fb2.png";
import pic3 from "./images/fb3.png";
import pic4 from "./images/fb4.png";
import style from "./App.module.css";
import Present from "./Components/Present";
import testPic from "./images/cart4.png";
import testPic2 from "./images/photo2.png";
import testPic3 from "./images/red.png";
import Recomend from "./Components/Recomend/index";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Header></Header>
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
        <div className={style.wrapBtn}>
          <p>Для бізнесу</p>
        </div>
        <p className={style.caption}>більше</p>
      </div>
      <div className={[style.wrapper, style.red].join(" ")}>
        <div className={style.wrapText}>
          <h2 className={style.smallTitle}>Чому саме ми?</h2>
          <p className={style.text}>
            Світовий океан - це цілий всесвіт, який досліджений набагато гірше,
            ніж космос. Можна лише здогадуватися у тому, які загадки він ховає.
            Але ми знаємо як знайти в ньому величезну кількість особливих і
            унікальних смаків. <strong>Спробуєте?</strong>
          </p>
        </div>
        <p className={style.caption2}>далі цікавіше</p>
      </div>
      <main className={style.main}>
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
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
