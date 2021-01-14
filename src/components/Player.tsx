import Youtube from "react-youtube";
import { useState } from "react";

export default function Player() {
  const [opts] = useState<Object>({
    height: "390",
    width: "640",
    playerVars: {
      start: 45,
      loop: 1,
    },
  });

  const onReady = (e: any) => {
    e.target.playVideo();
  };

  return <Youtube videoId="L786lbUnZIY" opts={opts} onReady={onReady} />;
}
