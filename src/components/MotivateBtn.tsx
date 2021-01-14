export default function MotivateBtn({ handleClick, loading }: any) {
  function getClassMotivate(loading: boolean) {
    return loading ? "motivate-btn hidden" : "motivate-btn";
  }

  return (
    <button
      id="#motivate"
      type="button"
      onClick={handleClick}
      className={getClassMotivate(loading)}
    >
      Motivate Me
    </button>
  );
}
