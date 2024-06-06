import { usePacmanGameContext } from "services/context";
import { OBJECT_TYPE } from "services/constants";

// CSS prefix: .pacstartbtn-
import "./style.css";

function StartButton() {
  const {
    setGameWin,
    setPowerPillActive,
    setScore,
    addObject,
    setPos,
    setSpeed,
  } = usePacmanGameContext();

  function onClick() {
    setGameWin(false);
    setPowerPillActive(false);
    setScore(0);

    setPos(22);
    setSpeed(2);
    addObject(22, [OBJECT_TYPE.PACMAN]);
  }

  return (
    <button className="pacstartbtn" onClick={onClick}>
      StartButton
    </button>
  );
}

export default StartButton;
