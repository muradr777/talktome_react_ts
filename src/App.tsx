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

  // function moveForm(e: any, position: boolean) {
  function moveForm(position: boolean) {
    setFormPosition(!position);
    setLoading(!loading);
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
        <Player />
      </main>

      <Footer />
    </div>
  );
}

// TODO: Use for random quote generation
// function getRandomInt(max: number) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
