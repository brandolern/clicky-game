import React from "react";
import Header from "./components/Header";
import GameBoard, {
	userMessage,
	score,
	highScore
} from "./components/GameBoard";
import { Container } from "./components/Grid";

function App() {
	return (
		<>
			<Header userMessage={userMessage} score={score} highScore={highScore} />
			<Container>
				<GameBoard />
			</Container>
		</>
	);
}

export default App;
