import React, { Component } from "react";
import Header from "./components/Header";
import { Container, Row, Col } from "./components/Grid";
import images from "./images.json";
import Image from "./components/Image";
import Footer from "./components/Footer";

class App extends Component {
	state = {
		images,
		score: 0,
		highScore: 0,
		clickedIds: [],
		status: "Click an image to begin, try not to click the same image twice!",
		isCorrect: ""
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
		const clickedIds = this.state.clickedIds;

		if (clickedIds.includes(id)) {
			this.setState({
				score: 0,
				clickedIds: [],
				status: "Sorry you lose! Try again",
				isCorrect: false
			});
		} else {
			if (this.state.score === this.state.highScore) {
				this.setState({
					highScore: this.state.score + 1
				});
			}
			if (this.state.score === this.state) clickedIds.push(id);
			this.setState({
				clickedIds: clickedIds,
				score: this.state.score + 1,
				status: "You guessed correctly!",
				isCorrect: true
			});
			return this.shuffleImages(this.state.images);
		}
	};

	splitImageArray = arr => {
		let counter = 0;
		let splitImagesArr = [];
		for (let i = 0; i < 3; i++) {
			splitImagesArr.push(arr.slice(counter, counter + 4));
			counter = counter + 4;
		}
		return splitImagesArr;
	};

	render() {
		return (
			<>
				<Header
					status={this.state.status}
					score={this.state.score}
					highScore={this.state.highScore}
					correct={this.state.isCorrect}
				/>
				<Container>
					{this.splitImageArray(this.state.images).map(imageArr => (
						<Row>
							<Col size="sm-2" />
							{imageArr.map(image => (
								<Col size="sm-2">
									<Image
										id={image.id}
										key={image.key}
										src={image.image}
										alt={image.alt}
										handleClickEvent={this.handleClickEvent}
										isCorrect={this.state.isCorrect}
									/>
								</Col>
							))}
							<Col size="sm-2" />
						</Row>
					))}
				</Container>
				<Footer />
			</>
		);
	}
}

export default App;
