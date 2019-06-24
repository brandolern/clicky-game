import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Image from "../Image";
import images from "../../images.json";
import "./style.css";

class GameBoard extends Component {
	state = {
		images,
		score: 0,
		highScore: 0,
		clickedArr: []
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

	handleClickEvent(event) {
		const imageId = event.target.id;
		console.log(this.state.clickedArr);

		this.state.clickedArr.map(id => {
			console.log(this);
			if (id !== imageId) {
				console.log(id);
				this.setState({
					clickedArr: this.state.clickedArr.concat([imageId]),
					highScore: this.state.highScore + 1
				});
			} else {
				this.setState({
					score: 0,
					clickedArr: []
				});
			}
		});
		this.shuffleImages(this.state.images);
	}

	render() {
		return (
			<Row>
				{this.state.images.map(image => (
					<Image
						src={image.image}
						alt={image.alt}
						id={image.id}
						key={image.key}
						onClick={e => this.handleClickEvent(e)}
						className="image"
					/>
				))}
			</Row>
		);
	}
}
export default GameBoard;
