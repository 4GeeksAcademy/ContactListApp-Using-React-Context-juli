import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light shadow-sm  px-4 mb-3">
			<Link to="/">
			<span className="p-2 navbar-brand mb-0 mr-2" style={{fontFamily: "Ditty", fontSize: "30px"}}> 📓 進撃の巨人, Shingeki no Kyojin </span>
			</Link>
			<div className="ml-auto btn">
				<Link to="/create">
					<button className="btn btn-success ">Create Contact</button>
				</Link>
			</div>
		</nav>
	);
};
