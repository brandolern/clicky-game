import React, { Component } from "react";
import Header from "./components/Header";
import { Container, Row, Col } from "./components/Grid";
import images from "./images.json";
import Image from "./components/Image";

class App extends Component {
	state = {
		images,
		score: 0,
		highScore: 0,
		clickedIds: [],
		status: "Click an image to play!"
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
				status: "Sorry you lose!"
			});
		} else {
			if (this.state.score === this.state.highScore) {
				this.setState({
					highScore: this.state.score + 1
				});
			}
			clickedIds.push(id);
			this.setState({
				clickedIds: clickedIds,
				score: this.state.score + 1,
				status: "You guessed correctly"
			});
			return this.shuffleImages(this.state.images);
		}
	};

	render() {
		return (
			<>
				<Header
					status={this.state.status}
					score={this.state.score}
					highScore={this.state.highScore}
				/>
				<Container>
					<Row>
						{this.state.images.map(image => (
							<Col size="sm-2.5">
								<Image
									id={image.id}
									key={image.key}
									src={image.image}
									alt={image.alt}
									handleClickEvent={this.handleClickEvent}
								/>
							</Col>
						))}
					</Row>
				</Container>
			</>
		);
	}
}

export default App;
