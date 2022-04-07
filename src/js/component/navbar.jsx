import React from "react";

//create your first component
const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar bg-light">
				<a className="navbar-brand">Start react</a>
				<div className="align">
					<a className="nav-item form-inline ">Home </a>
					<a className="nav-item form-inline ">About </a>
					<a className="nav-item form-inline ">Services </a>
					<a className="nav-item form-inline ">Contact </a>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
