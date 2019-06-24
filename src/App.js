import React from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import { Container } from "./components/Grid";

function App() {
	return (
		<>
			<Header />
			<Container>
				<GameBoard />
			</Container>
		</>
	);
}

export default App;
