import React, { createContext, useState } from "react";

export const userContext = createContext(null);

const UserContextProvider = (props) => {
	const [user, setUser] = useState({
		id: 1,
		name: "Raul Camacho",
	});

	return (
		<userContext.Provider value={{ user, setUser }}>
			{props.children}
		</userContext.Provider>
	);
};

export default UserContextProvider;
