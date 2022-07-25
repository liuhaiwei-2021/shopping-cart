import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

export default function App() {
	return (
		<div className="App bg-light">
			<>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/store" element={<Store />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</>
		</div>
	);
}
