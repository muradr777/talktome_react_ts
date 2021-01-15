export default function Quote({ active, content }: any) {
  if (typeof active !== "boolean") {
    console.warn("Something went wrong! Var active is " + active);
    active = false;
  }

  function getClassName(isActive: boolean) {
    return isActive ? "quote-wrap active" : "quote-wrap";
  }

  return (
    <div className={getClassName(active)}>
      <div className="quote-slider">
        {content.map((item: any, key: any) => {
          return (
            <span key={key} className="quote-item">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
