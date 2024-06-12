import { useAppContext } from "services/context";

// CSS prefix: .pacstartbtn-
import "./style.css";

function StartButton() {
  const { startGame, isPlaying } = useAppContext();

  function onClick() {
    startGame();
  }

  // if (isPlaying) {
  //   return <></>;
  // }

  return (
    <button className="pacstartbtn" onClick={onClick}>
      StartButton
    </button>
  );
}

export default StartButton;
