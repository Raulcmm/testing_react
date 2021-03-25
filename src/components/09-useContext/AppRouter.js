import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import Navbar from "./Navbar";
const AppRouter = () => {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/login" component={LoginScreen} />
					<Route exact path="/about" component={AboutScreen} />
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
