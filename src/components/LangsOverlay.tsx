import { useState, useEffect, useContext } from "react";
import { LangContext } from "../context";

function LangsOverlay() {
  const [overlayClass, setOverlayClass] = useState<string>("lang-overlay");
  const { lang, setLang } = useContext(LangContext);

  useEffect(() => {
    if (lang !== "") setOverlayClass("lang-overlay hide");
  }, [lang]);
  return (
    <div className={overlayClass}>
      <div className="langs-wrap">
        <h3 className="lang-title">Select Language</h3>
        <button
          type="button"
          onClick={() => setLang("en")}
          className="langs-btn"
        >
          en
        </button>
        <button
          type="button"
          onClick={() => setLang("ru")}
          className="langs-btn"
        >
          ru
        </button>
      </div>
    </div>
  );
}

export default LangsOverlay;
