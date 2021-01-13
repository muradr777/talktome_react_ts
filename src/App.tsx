import { useState } from "react";

import "./sass/style.sass";

// Alphabetic sorted
import Answer from "./components/Answer";
import ControlBtn from "./components/ControlBtn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Player from "./components/Player";
import UseHeadphones from "./components/UseHeadphones";

export default function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [formPosition, setFormPosition] = useState<boolean>(false);

  function setPlayerStatus(status: boolean) {
    setPlaying(!status);
  }

  function moveForm(e: any, position: boolean) {
    e.preventDefault();
    setFormPosition(!position);
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
          <Form onSubmit={(e: any) => moveForm(e, formPosition)} />

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
function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}
