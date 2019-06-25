import React, { Component } from "react";
import Header from "./components/Header";
import { Container, Row, Col } from "./components/Grid";
import images from "./images.json";
import Image from "./components/Image";
import Wrapper from "./components/Wrapper";

class App extends Component {
	state = {
		images,
		score: 0,
		highScore: 0,
		clickedIds: [],
		status: ""
	};

	shuffleImages = arr => {
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
	};

	handleClickEvent = id => {
		console.log(this.state.clickedIds);
	};
	// if(this.state.clickedArr.length === 0) {
	// 	this.setState({
	// 		clickedArr: this.state.clickedArr.concat([imageId]),
	// 		score: this.state.score + 1,
	// 		highScore: this.state.highScore + 1,
	// 		status: ""
	// 	});
	// 	// console.log(this.state.highScore);
	// 	return this.shuffleImages(this.state.images);
	// }
	// const filterArr = this.state.clickedArr.filter(id => {
	// 	return id === imageId;
	// });
	// if (filterArr.length !== 0) {
	// 	this.setState({
	// 		score: 0,
	// 		clickedArr: [],
	// 		status: "Sorry you lose!"
	// 	});
	// 	// console.log(this.state.highScore);
	// } else {
	// 	this.setState({
	// 		clickedArr: this.state.clickedArr.concat([imageId]),
	// 		score: this.state.score + 1,
	// 		highScore: this.state.highScore + 1,
	// 		status: "That's correct"
	// 	});
	// 	this.shuffleImages(this.state.images);
	// 	// console.log(this.state.highScore);
	// }
	render() {
		return (
			<Container>
				<Wrapper>
					<Header
						status={this.state.status}
						score={this.state.score}
						highScore={this.state.highScore}
					/>
					{this.state.images.map(image => (
						<Image
							id={image.id}
							key={image.key}
							src={image.image}
							alt={image.alt}
							handleClickEvent={this.handleClickEvent}
						/>
					))}
				</Wrapper>
			</Container>
		);
	}
}

export default App;
