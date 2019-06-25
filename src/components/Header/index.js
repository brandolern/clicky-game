import React from "react";
import { Row, Col } from "../Grid";
import Status from "../Status";
import Scores from "../Scores";

function Header(props) {
	return (
		<Row>
			<Col size="sm-4">
				<h1 className="title">Clicky Office Game</h1>
			</Col>
			<Col size="sm-4">
				<Status userMessage={props.status} />
			</Col>
			<Col size="sm-4">
				<Scores score={props.score} highScore={props.highScore} />
			</Col>
		</Row>
	);
}
export default Header;
