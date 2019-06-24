import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Image from "../Image";
import images from "../../images.json";
import "./style.css";

class GameBoard extends Component {
	state = {
		images,
		score: 0,
		highScore: 0
	};

	shuffleImages(arr) {
		let length = arr.length;
		let temp;
		let index;

		while (length > 0) {
			index = Math.floor(Math.random() * length);
			length--;
			temp = arr[length];
			arr[length] = arr[index];
			arr[index] = temp;
		}

		this.setState({
			images: arr
		});
	}
	// componentDidMount() {}
	handleClickEvent() {
		this.shuffleImages(this.state.images);
	}

	render() {
		return (
			<Container fluid>
				{this.state.images.map(image => (
					<Image
						src={image.image}
						alt={image.alt}
						id={image.id}
						key={image.key}
						onClick={this.handleClickEvent}
						className="image"
					/>
				))}
			</Container>
		);
	}
}
export default GameBoard;
