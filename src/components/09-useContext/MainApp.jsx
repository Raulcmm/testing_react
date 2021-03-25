import React from "react";
import AppRouter from "./AppRouter";
import UserContextProvider from "./userContext";

const MainApp = () => {
	return (
		<UserContextProvider>
			<AppRouter />
		</UserContextProvider>
	);
};

export default MainApp;
