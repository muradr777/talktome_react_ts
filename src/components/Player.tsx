import Youtube from "react-youtube";
import { useState, useEffect } from "react";

// TODO: Music don't work on Iphones

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
    if (player !== null) {
      if (playerState) {
        player.playVideo();
        player.unMute();
      } else {
        player.mute();
      }
    }
  }, [player, playerState]);

  return (
    <div className="player-wrap">
      <Youtube videoId="L786lbUnZIY" opts={opts} onReady={onReady} />
    </div>
  );
}
