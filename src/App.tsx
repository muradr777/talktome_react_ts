import { useState } from "react";

import "./sass/style.sass";

// Alphabetic sorted
import Answer from "./components/Answer";
import ControlBtn from "./components/ControlBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Player from "./components/Player";
import UseHeadphones from "./components/UseHeadphones";
import MotivateBtn from "./components/MotivateBtn";
import Preloader from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [formPosition, setFormPosition] = useState<boolean>(false);

  const [quotes, setQuotes] = useState<any>([
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

  function moveForm(position: boolean) {
    setFormPosition(!position);
    setLoading(!loading);
    setPlaying(!playing);
  }

  function getClassFormWrap(active: boolean) {
    return active ? "form-wrap active" : "form-wrap";
  }

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        {/* TODO: Make dinamic */}
        <Answer
          toggle={formPosition}
          content="odio architecto rem reiciendis consectetur officia ab,"
        />
        {/* TODO: Make dinamic */}
        <div className={getClassFormWrap(formPosition)}>
          <div className="motivate-wrap">
            <MotivateBtn
              handleClick={() => moveForm(formPosition)}
              loading={loading}
            />
            <Preloader loading={loading} />
          </div>

          <ControlBtn
            handleClick={() => setPlaying(!playing)}
            buttonId="mute"
            status={playing}
          />
          <ControlBtn
            handleClick={() => setPlaying(!playing)}
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

// TODO: Use for random quote generation
// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
