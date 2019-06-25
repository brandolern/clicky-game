import React from "react";

function Scores(props) {
	return (
		<>
			<h3>{props.score}</h3>
			<h3>{props.highScore}</h3>
		</>
	);
}
export default Scores;
