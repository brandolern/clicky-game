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
		clickedArr: [],
		userMessage: ""
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
		if (this.state.clickedArr.length === 0) {
			this.setState({
				clickedArr: this.state.clickedArr.concat([imageId]),
				score: this.state.score + 1,
				highScore: this.state.highScore + 1,
				userMessage: ""
			});
			console.log(this.state.highScore);
			return this.shuffleImages(this.state.images);
		}
		const filterArr = this.state.clickedArr.filter(id => {
			return id === imageId;
		});

		if (filterArr.length !== 0) {
			this.setState({
				score: 0,
				clickedArr: [],
				userMessage: "Sorry you lose!"
			});
			console.log(this.state.highScore);
		} else {
			this.setState({
				clickedArr: this.state.clickedArr.concat([imageId]),
				score: this.state.score + 1,
				highScore: this.state.highScore + 1,
				userMessage: "That's correct"
			});
			this.shuffleImages(this.state.images);
			console.log(this.state.highScore);
		}
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
export { score };
export { highScore };
export { userMessage };
