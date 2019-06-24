import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import Image from "../Image";

class GameBoard extends Component {
	state = {
		imageSrcArr: [
			"https://www.pexels.com/photo/close-up-photography-of-cat-1183434/",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1",
			"1"
		],
		imageList: [],
		clickedArr: []
	};
	componentDidMount() {
		this.createImageList(this.state.imageSrcArr);
	}
	createImageList(arr) {
		this.setState(arr => {
			imageList: () => {};
		});
	}
	//  this.state.imageList.push(
	//      <Image src={img} id={img.index} key={img.index} alt="alt" />
	//  );
	render() {
		return (
			<Container fluid>
				<Row />
				<Row />
				<Row />
			</Container>
		);
	}
}
export default GameBoard;
