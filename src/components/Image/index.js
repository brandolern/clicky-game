import React from "react";

function Image(props) {
	return (
		<img
			src={props.src}
			id={props.id}
			key={props.id}
			alt={props.alt}
			onClick={() => props.handleClickEvent(props.id)}
			className="image"
		/>
	);
}
export default Image;
