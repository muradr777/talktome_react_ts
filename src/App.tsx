import { useState, useEffect } from "react";

import "./sass/style.sass";

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
  const [muted, setMuted] = useState<boolean>(false);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [playing, setPlayingState] = useState<boolean>(false);

  const [quotes] = useState<any>([
    ["Stay calm", "Take a deep breath", "Everithing is possible."],
    ["All our dreams can come true", "If we have the courage to pursue them."],
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
  ]);

  const [currentQuote, setCurrentQuote] = useState<any>([]);

  useEffect(() => {
    if (currentQuote.length === 0)
      setCurrentQuote(quotes[getRandomInt(quotes.length - 1)]);
  }, [currentQuote, quotes]);

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
        {/* TODO: Make dinamic */}
        <Quote active={showAnswer} content={currentQuote} />
        <div className={getClassFormWrap(showAnswer)}>
          <div className="motivate-wrap">
            <MotivateBtn
              handleClick={() => {
                setShowAnswer(true);
                if (!playing && !muted) setPlayingState(!playing);
              }}
              loading={showAnswer}
            />
            <Preloader loading={showAnswer} />
          </div>

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

          <UseHeadphones />
        </div>
        <Player playerState={playing} />
      </main>

      <Footer />
    </div>
  );
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
