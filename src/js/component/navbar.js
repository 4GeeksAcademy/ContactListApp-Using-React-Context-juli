import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light shadow-sm py-3 px-4 mb-3">
			<Link to="/">
				<span className="p-2 navbar-brand mb-0 h1 fas fa-address-book mr-2"> Agenda de ju </span>
			</Link>
			<div className="ml-auto btn">
				<Link to="/create">
					<button className="btn btn-primary ">Create Contact</button>
				</Link>
			</div>
		</nav>
	);
};
