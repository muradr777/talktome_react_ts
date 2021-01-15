export default function ControlBtn({ buttonId, handleClick, status }: any) {
  let btnClass = "controlBtn ",
    icoClass = "fas fa-volume-";
  if (buttonId === "mute") {
    btnClass += "mRight";
    icoClass += "mute";
  } else {
    btnClass += "mLeft";
    icoClass += "up";
  }

  if (typeof status === "boolean" && status) btnClass += " active";

  return (
    <button
      id={buttonId}
      onClick={handleClick}
      type="button"
      className={btnClass}
    >
      <i className={icoClass}></i>
    </button>
  );
}
