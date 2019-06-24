import react from "react";
import { Row, Col } from "../Grid";
function Header(props) {
	return (
		<Row>
			<Col size="sm-12">
				<h1 classname="title">The Clicky Game</h1>
			</Col>
			<Col size="sm-12">
				<UserMessage userMessage={props.userMessage} />
			</Col>
			<Col size="sm-12">
				<Score score={props.score} />
				<Highscore />
			</Col>
		</Row>
	);
}
export default Header;
