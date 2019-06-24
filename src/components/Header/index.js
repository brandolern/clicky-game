import React from "react";
import { Row, Col } from "../Grid";
import UserMessage from "../UserMessage";
import Scores from "../Scores";
function Header(props) {
	return (
		<Row>
			<Col size="sm-4">
				<h1 className="title">Clicky Office Game</h1>
			</Col>
			<Col size="sm-4">
				<UserMessage userMessage="usermessage" />
			</Col>
			<Col size="sm-4">
				<Scores score={props.score} highscore={props.highscore} />
			</Col>
		</Row>
	);
}
export default Header;
