import react from "react";

function image(props) {
	return <img src={props.src} id={props.id} key={props.id} />;
}
export default image;
