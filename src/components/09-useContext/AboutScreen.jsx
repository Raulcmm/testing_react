import React, { useContext } from "react";
import { userContext } from "./userContext";

const AboutScreen = () => {
	const { user, setUser } = useContext(userContext);
	const handleClick = () => {
		setUser({});
	};

	return (
		<div>
			<h1>AboutScreen</h1>
			<hr />
			<pre>{JSON.stringify(user, null, 3)}</pre>
			<h2>{user.name}</h2>

			<button className="btn btn-warning" onClick={handleClick}>
				delete data
			</button>
		</div>
	);
};

export default AboutScreen;
