export default function Preloader({ loading }: any) {
  function getClassLoading(loading: boolean) {
    return loading ? "loading active" : "loading";
  }

  return (
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
  );
}
