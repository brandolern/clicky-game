import React from "react";
import "./style.css";
function Image(props) {
	return (
		<div className="imgContainer">
			<img
				src={props.src}
				id={props.id}
				key={props.id}
				alt={props.alt}
				onClick={() => props.handleClickEvent(props.id)}
				className="img"
			/>
		</div>
	);
}
export default Image;
