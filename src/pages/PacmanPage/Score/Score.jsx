import { useSelector } from "react-redux";

import { selectScore } from "store/appSlice/selectors";

// CSS prefix: .pacman-score-
import "./style.css";

function Score() {
  const score = useSelector(selectScore);
  return <div className="pacman-score">{score ? score : "Score"}</div>;
}

export default Score;
