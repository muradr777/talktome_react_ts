import { useState, useEffect } from "react";

import "./sass/style.sass";

// Context
import { TranslationContext, LangContext } from "./context";

// Alphabetic sorted
import Quote from "./components/Quote";
import ControlBtn from "./components/ControlBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Player from "./components/Player";
import UseHeadphones from "./components/UseHeadphones";
import MotivateBtn from "./components/MotivateBtn";
import Preloader from "./components/Preloader";

export default function App() {
  const [lang, setLang] = useState<string>("");
  const [muted, setMuted] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [playing, setPlayingState] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<any>([]);

  const [translation, setTranslation] = useState<any>({
    en: {
      motivate_me: "Motivate Me",
      headphones_recommended: "Headphones recommended",
    },
    ru: {
      motivate_me: "Мотивируй меня",
      headphones_recommended: "Рекомендуем надеть наушники",
    },
  });

  const [quotes] = useState<any>({
    ru: [
      [
        "Вместо того, чтобы сетовать, что роза имеет шипы,",
        "я радуюсь тому, что среди шипов растет роза.",
      ],
      [
        "Одной лишь мотивации недостаточно.",
        "Если взять идиота и мотивировать его, получится мотивированный идиот.",
      ],
      [
        "Никогда не недооценивайте себя.",
        "Все то, что делают другие, можете делать и вы.",
      ],
      ["Инвестиции в знания дают самые высокие дивиденды."],
      [
        "Каждая мечта тебе дается вместе с силами,",
        "необходимыми для ее осуществления.",
      ],
      ["Лучше зажечь одну свечу,", "чем проклинать темноту."],
      ["Есть только один способ проделать большую работу - ", "полюбить ее!"],
      ["Кораблю безопасней в порту,", "но он не для этого строился."],
      [
        "Воин не отказывается от того, что любит,",
        "он находит любовь в том, что делает.",
      ],
      ["Неудача – это просто возможность начать снова,", "но уже более мудро."],
      [
        "Логика может привести вас от пункта А к пункту Б,",
        "а воображение – куда угодно.",
      ],
      [
        "Что бы ты ни придумал, всегда найдется тот, кто уже делал это до тебя.",
        "Так что главное – сделать это лучше. ",
      ],
      [
        "Ты не можешь ни выиграть, ни проиграть до тех пор,",
        "пока ты не участвуешь в гонках.",
      ],
      ["На любые события в своей жизни смотри оптимистично."],
      ["Если чего-то много,", "ни для кого это не ценно."],
      ["Всё самое лучшее случается неожиданно."],
      [
        "Если вы не готовы рискнуть обычным",
        "вам придется довольствоваться заурядным.",
      ],
      ["Не ноша тянет вас вниз", "а то, как вы ее несете."],
      [
        "Люди забудут, что вы говорили",
        "люди забудут, что вы делали",
        "но люди никогда не забудут,",
        "какие чувства вы у них вызвали.",
      ],
      ["Прыгай", "и сеть появится."],
      ["Важно не то, сбили ли тебя с ног", "важно то, поднялся ли ты снова."],
      ["Чтобы выиграть", "вы должны поверить, что вы этого достойны"],
      [
        "Если вы работаете над тем, что для вас действительно важно",
        "вас не приходится подгонять",
        "вас тянет вперед ваша мечта.",
      ],
      [
        "Лучше осмелиться на неудачную попытку",
        "чем жить в серых сумерках",
        "где нет ни побед, ни поражений.",
      ],
      [
        "Я не могу изменить направление ветра",
        "но могу развернуть паруса так",
        "что всегда доберусь туда, куда мне нужно.",
      ],
    ],
    en: [
      ["Act as if what you do makes a difference.", "It does."],
      [
        "Success is not final, failure is not fatal:",
        "it is the courage to continue that counts.",
      ],
      ["Keep your eyes on the stars", "and your feet on the ground."],
      ["Believe you can", "and you're halfway there"],
      ["When you have a dream,", "you've got to grab it and never let go."],
      [
        "No matter what you're going through,",
        "there's a light at the end of the tunnel.",
      ],
      [
        "Life is like riding a bicycle.",
        "To keep your balance, you must keep moving.",
      ],
      ["Try to be a rainbow in someone else's cloud."],
      [
        "Sometimes you will never know the value of a moment,",
        "until it becomes a memory.",
      ],
      ["You get what you give."],
      [
        "Some people look for a beautiful place.",
        "Others make a place beautiful.",
      ],
      ["Keep your face to the sunshine", "and you cannot see a shadow."],
      ["Stay calm", "Take a deep breath", "Everithing is possible."],
      [
        "All our dreams can come true",
        "If we have the courage to pursue them.",
      ],
      [
        "You’ve gotta dance like there’s nobody watching",
        "Love like you’ll never be hurt",
        "Sing like there’s nobody listening",
        "and live like it’s heaven on earth.",
      ],
      ["It’s not the load that breaks you down", "it’s the way you carry it."],
      ["The hard days are what make you stronger."],
      [
        "Don’t be pushed around by the fears in your mind",
        "Be led by the dreams in your heart.",
      ],
      ["Keep your eyes on the stars", "and your feet on the ground."],
      ["If opportunity doesn’t knock", "build a door."],
      [
        "The only difference",
        "between ordinary and extraordinary",
        "is that little extra.",
      ],
      ["If you cannot do great things", "do small things in a great way."],
      ["H.O.P.E.", "means", "Hold On. Pain Ends."],
      ["Don’t dream about success", "Get out there and work for it."],
      ["Make your fear of losing your greatest motivator."],
      ["It might not be easy", "but it’ll be worth it."],
      ["Don’t stop when you are tired", "Stop when you are done."],
    ],
  });

  useEffect(() => {
    if (lang !== "") {
      let quotesArray = quotes[lang];
      if (currentQuote.length === 0)
        setCurrentQuote(quotesArray[getRandomInt(quotesArray.length - 1)]);
    }
  }, [lang, currentQuote, quotes]);

  useEffect(() => {
    let time = 4, // 2sec first delay, 4sec each next, and 2 additional for smothiness
      timeout1: any;
    if (showAnswer) {
      for (let i = 1; i <= currentQuote.length; ++i) time += 4 * i;

      timeout1 = setTimeout(() => {
        setShowAnswer(false);
        setCurrentQuote([]);
        // TODO: settle Animation transition of quote hiding
      }, (time + 2) * 1000);
    }

    return () => clearTimeout(timeout1);
  }, [showAnswer, currentQuote]);

  function getClassFormWrap(active: boolean) {
    return active ? "form-wrap active" : "form-wrap";
  }

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <Quote active={showAnswer} content={currentQuote} />
        <div className={getClassFormWrap(showAnswer)}>
          <div className="motivate-wrap">
            <LangContext.Provider value={{ lang, setLang }}>
              <TranslationContext.Provider
                value={{ translation, setTranslation }}
              >
                <MotivateBtn
                  handleClick={() => {
                    setShowAnswer(true);
                    if (!playing && !muted) setPlayingState(!playing);
                  }}
                  loading={showAnswer}
                />
              </TranslationContext.Provider>
            </LangContext.Provider>
            <Preloader loading={showAnswer} />
          </div>
          <div className="control-wrap">
            <ControlBtn
              handleClick={() => {
                setPlayingState(!playing);
                setMuted(!muted);
              }}
              buttonId="mute"
              status={playing}
            />
            <ControlBtn
              handleClick={() => {
                setPlayingState(!playing);
                setMuted(!muted);
              }}
              buttonId="play"
              status={!playing}
            />
          </div>

          <LangContext.Provider value={{ lang, setLang }}>
            <TranslationContext.Provider
              value={{ translation, setTranslation }}
            >
              <UseHeadphones />
            </TranslationContext.Provider>
          </LangContext.Provider>
          <Player playerState={playing} />
        </div>
      </main>

      <LangContext.Provider value={{ lang, setLang }}>
        <Footer />
      </LangContext.Provider>
    </div>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
