import { useContext } from "react";
import { LangContext, TranslationContext } from "../context";

export default function UseHeadphones() {
  const { lang } = useContext(LangContext);
  const { translation } = useContext(TranslationContext);

  return (
    <span className="user-headset">
      <span className="lang-text" data-lang="headphones_recommended">
        {translation[lang] !== undefined
          ? translation[lang].headphones_recommended
          : "Headphones recommended"}{" "}
        &nbsp;
      </span>
      <i className="fas fa-headphones"></i>
    </span>
  );
}
