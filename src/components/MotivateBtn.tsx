import { useContext, useEffect } from "react";
import { LangContext, TranslationContext } from "../context";

export default function MotivateBtn({ handleClick, loading }: any) {
  const { lang } = useContext(LangContext);
  const { translation } = useContext(TranslationContext);

  function getClassMotivate(loading: boolean) {
    return loading ? "motivate-btn hidden" : "motivate-btn";
  }

  useEffect(() => {
    if (translation !== undefined) {
    }
  });

  return (
    <button
      id="#motivate"
      type="button"
      onClick={handleClick}
      className={getClassMotivate(loading)}
    >
      {translation[lang] !== undefined
        ? translation[lang].motivate_me
        : "Motivate Me"}
    </button>
  );
}
