import { useAppContext } from "services/context";

// CSS prefix: .pacstartbtn-
import "./style.css";

function StartButton() {
  const { startGame } = useAppContext();

  function onClick() {
    startGame();
  }

  return (
    <button className="pacstartbtn" onClick={onClick}>
      StartButton
    </button>
  );
}

export default StartButton;
