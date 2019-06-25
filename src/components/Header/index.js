import React from "react";
import { Row, Col } from "../Grid";
import Status from "../Status";
import Scores from "../Scores";
import "./style.css";

function Header(props) {
	return (
		<div className="header">
			<Row>
				<Col size="sm-4">
					<h2 className="title">Clicky Office Game</h2>
				</Col>
				<Col size="sm-4">
					<Status
						userMessage={props.status}
						correct={props.correct}
						topMargin="title"
					/>
				</Col>
				<Col size="sm-4">
					<Scores
						score={props.score}
						highScore={props.highScore}
						topMargin="title"
					/>
				</Col>
			</Row>
		</div>
	);
}
export default Header;
