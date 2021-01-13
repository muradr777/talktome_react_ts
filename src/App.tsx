import "./sass/style.sass";

// Alphabetic sorted
import Answer from "./components/Answer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Player from "./components/Player";
import UseHeadphones from "./components/UseHeadphones";
import VolumeBtn from "./components/VolumeBtn";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="wrapper">
        <Answer />

        <div className="form-wrap">
          <Form />

          <VolumeBtn buttonId="volDown" />
          <VolumeBtn buttonId="volUp" />

          <UseHeadphones />
        </div>

        <Player />
      </main>

      <Footer />
    </div>
  );
}

export default App;
