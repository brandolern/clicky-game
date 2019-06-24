import React from "react";

function image(props) {
	return <img src={props.src} id={props.id} key={props.id} alt={props.alt} />;
}
export default image;
