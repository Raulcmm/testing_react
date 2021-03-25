import React, { useContext } from "react";
import { userContext } from "./userContext";

const LoginScreen = () => {
	const { setUser } = useContext(userContext);
	return (
		<div>
			<h1>LoginScreen</h1>
			<hr />
			<button
				className="btn btn-primary"
				onClick={() => setUser({ id: 123, name: "Osvaldo Camacho" })}
			>
				Agregar datos
			</button>
		</div>
	);
};

export default LoginScreen;
