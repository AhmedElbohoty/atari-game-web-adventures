import { useAppContext } from "services/context";

// CSS prefix: .pacstartbtn-
import "./style.css";

function StartButton() {
  const { startGame, isPlaying } = useAppContext();

  function onClick() {
    startGame();
  }

  return (
    <button className="pacstartbtn" onClick={onClick} data-disabled={isPlaying}>
      Start
    </button>
  );
}

export default StartButton;
