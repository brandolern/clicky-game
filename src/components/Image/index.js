import React from "react";
import "./style.css";
function Image(props) {
	let border;

	switch (props.isCorrect) {
		case true:
			border = "normalBorder";
			break;
		case false:
			border = "incorrectBorder";
			break;
		default:
			border = "normalBorder";
			break;
	}

	return (
		<div className="imgContainer">
			<img
				src={props.src}
				id={props.id}
				key={props.id}
				alt={props.alt}
				onClick={() => props.handleClickEvent(props.id)}
				className={`img ${border}`}
			/>
		</div>
	);
}
export default Image;
