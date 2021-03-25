import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className=" nav-item nav-link "
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className=" nav-item nav-link "
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/login"
								activeClassName="active"
								className=" nav-item nav-link "
							>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
