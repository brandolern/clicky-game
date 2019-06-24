import react from "react";
import { Container, Row, Col } from "../Grid";
import Image from "../Image";
class GameBoard extends Component {
	state = {
		imageArr: this.state.imageArr
	};
	imageArr = ["images"];
	correctArr = [];

	componentDidMount() {
		imageList = this.displayImages();
	}
	displayImages(imageArr) {
		return imageArr.map(img => {
			<Image src={img} id={this.index} key={this.index} />;
		});
	}

	render() {
		<Container fluid>
			<Row>
				{imageList.filter(img => {
					if (img.index < 4) {
						return <Col size="sm-2">{img}</Col>;
					}
				})}
			</Row>
			<Row>
				{imageList.filter(img => {
					if (img.index > 3 && img.index < 8) {
						return <Col size="sm-2">{img}</Col>;
					}
				})}
			</Row>
			<Row>
				{imageList.filter(img => {
					if (img.index > 7) {
						return <Col size="sm-2">{img}</Col>;
					}
				})}
			</Row>
		</Container>;
	}
}
export default GameBoard;
