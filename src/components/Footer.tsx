import { useState, useEffect, useContext } from "react";
import { LangContext } from "../context";
import LangsOverlay from "./LangsOverlay";

export default function Footer() {
  const [langsVisibility, setLangVisibility] = useState<boolean>(true);
  const { lang } = useContext(LangContext);
  useEffect(() => {
    let timeout: any;
    if (lang !== "") {
      timeout = setTimeout(() => {
        setLangVisibility(false);
      }, 1000);
    }
  }, [lang]);

  function removeLangsOverlay() {}

  return (
    <footer className="Footer">
      <div className="copyrights">
        <span>Murad Rustamov © 2021</span>
      </div>
      {langsVisibility ? <LangsOverlay /> : ""}
    </footer>
  );
}
