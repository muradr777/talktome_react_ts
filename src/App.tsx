import { useState } from "react";

import "./sass/style.sass";

// Alphabetic sorted
import Answer from "./components/Answer";
import ControlBtn from "./components/ControlBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Player from "./components/Player";
import UseHeadphones from "./components/UseHeadphones";

export default function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const [formPosition, setFormPosition] = useState<boolean>(false);

  function disableMotivateBtn(loading: boolean) {}

  function getClassMotivate(loading: boolean) {
    return loading ? "motivate-btn hidden" : "motivate-btn";
  }

  function getClassLoading(loading: boolean) {
    return loading ? "loading active" : "loading";
  }

  function setPlayerStatus(status: boolean) {
    setPlaying(!status);
  }

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
      {/* TODO: Show landscape error. */}
      <main className="wrapper">
        {/* TODO: Make dinamic */}
        <Answer
          toggle={formPosition}
          content="odio architecto rem reiciendis consectetur officia ab,"
        />
        {/* TODO: Make dinamic */}
        <div className={getClassFormWrap(formPosition)}>
          <div className="motivate-wrap">
            <button
              id="#motivate"
              onClick={() => moveForm(formPosition)}
              type="button"
              className={getClassMotivate(loading)}
            >
              Motivate Me
            </button>
            <div className={getClassLoading(loading)}>
              <div className="gooey">
                <span className="credits" hidden>
                  Credit: https://dribbble.com/shots/5092176-Newton-Loader
                </span>
                <span className="dot"></span>
                <div className="dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          <ControlBtn
            handleClick={() => setPlayerStatus(playing)}
            buttonId="mute"
            status={playing}
          />
          <ControlBtn
            handleClick={() => setPlayerStatus(playing)}
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
