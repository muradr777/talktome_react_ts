import Youtube from "react-youtube";
import { useState, useEffect } from "react";

export default function Player({ playerState }: any) {
  const [opts] = useState<Object>({
    height: "390",
    width: "640",
    playerVars: {
      start: 45,
      loop: 1,
    },
  });
  const [player, setPlayer] = useState<any>(null);

  const onReady = (e: any) => {
    setPlayer(e.target);
  };

  useEffect(() => {
    console.log(player, playerState);
    if (player !== null) {
      if (playerState) {
        player.playVideo();
        player.unMute();
      } else {
        player.mute();
      }
    }
  }, [playerState]);

  return <Youtube videoId="L786lbUnZIY" opts={opts} onReady={onReady} />;
}
