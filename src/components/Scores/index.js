import React from "react";
import { highScore, score } from "../GameBoard";
function Scores(props) {
	return (
		<>
			<h3>{props.score}</h3>
			<h3>{props.highscore}</h3>
		</>
	);
}
export default Scores;
