export default function VolumeBtn({ buttonId }: any) {
  let btnClass = "volWrap ",
    icoClass = "fas fa-volume-";
  if (buttonId === "volDown") {
    btnClass += "vLeft";
    icoClass += "up";
  } else {
    btnClass += "vRight";
    icoClass += "mute";
  }

  return (
    <button id={buttonId} type="button" className={btnClass}>
      <i className={icoClass}></i>
    </button>
  );
}
