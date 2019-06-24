import React from "react";
import { Row, Col } from "../Grid";
import UserMessage from "../UserMessage";
function Header(props) {
	return (
		<Row>
			<Col size="sm-12">
				<h1 className="title">The Clicky Game</h1>
			</Col>
			<Col size="sm-12">
				<UserMessage userMessage="hello" />
			</Col>
			<Col size="sm-12">{/* <Score score={props.score} />
				<Highscore /> */}</Col>
		</Row>
	);
}
export default Header;
