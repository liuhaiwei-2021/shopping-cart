import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
	return (
		<div className="nav-bar">
			<div className="bg-white mb-3 nav-container">
				<div>
					<NavLink className="navlink" to="/">
						Home
					</NavLink>
					<NavLink className="navlink" to="/about">
						About
					</NavLink>
					<NavLink className="navlink" to="/store">
						Store
					</NavLink>
				</div>
				<button type="button" className="btn">
					<img src="https://img.icons8.com/fluency/48/000000/shopping-cart.png" />
				</button>
			</div>
		</div>
	);
}
