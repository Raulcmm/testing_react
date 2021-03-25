import React, { useContext } from "react";

import { userContext } from "./userContext";
const HomeScreen = () => {
	const { user } = useContext(userContext);
	// console.log(user);
	return (
		<div>
			<h1>HomeScreen</h1>
			<hr />

			<pre>{JSON.stringify(user)}</pre>
		</div>
	);
};

export default HomeScreen;
