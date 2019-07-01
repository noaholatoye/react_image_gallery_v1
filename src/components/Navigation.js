import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
const Navigation = props => {
	return (
		<BrowserRouter>
			<nav className="main-nav">
				<ul>
					<li>
						<NavLink
							exact
							to="/cats"
							onClick={e => props.onSearchChange("cats")}
						>
							Cats
						</NavLink>
					</li>
					<li>
						<NavLink to="/dogs">Dogs</NavLink>
					</li>
					<li>
						<NavLink to="/computers">Computers</NavLink>
					</li>
				</ul>
			</nav>
		</BrowserRouter>
	);
};

export default Navigation;
