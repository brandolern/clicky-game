import React from "react";

function Scores(props) {
	return (
		<>
			<h3 className={props.topMargin}>
				Score: {props.score} | High Score: {props.highScore}
			</h3>
		</>
	);
}
export default Scores;
