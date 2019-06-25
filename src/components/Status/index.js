import React from "react";
import "./style.css";
function UserMessage(props) {
	let isCorrect;
	props.correct === ""
		? (isCorrect = "text-white margin-top")
		: (isCorrect = props.correct
				? `green ${props.topMargin}`
				: `red ${props.topMargin}`);

	return (
		<h4 className={`text-center ${isCorrect} lead`}>{props.userMessage}</h4>
	);
}
export default UserMessage;
