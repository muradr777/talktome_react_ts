export default function Answer({ toggle, content }: any) {
  if (typeof toggle !== "boolean") {
    console.warn("Something went wrong! Var toggle is " + toggle);
    toggle = false;
  }

  function getClassName(isActive: boolean) {
    return isActive ? "answer-wrap active" : "answer-wrap";
  }

  return (
    <div className={getClassName(toggle)}>
      <span id="answer">{content}</span>
    </div>
  );
}
