import { mount } from "enzyme";
import React from "react";

import LoginScreen from "../../../components/09-useContext/LoginScreen";
import UserContextProvider, {
	userContext,
} from "../../../components/09-useContext/userContext";

describe("Test to Login Screen", () => {
	const setUser = jest.fn();
	const wrapper = mount(
		<userContext.Provider
			value={{
				setUser,
			}}
		>
			<LoginScreen />
		</userContext.Provider>
	);
	test("Match con el snap", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe setear la informacion con el objeto enviado", () => {
		wrapper.find("button").simulate("click");
		expect(setUser).toHaveBeenCalledWith({
			id: 1223,
			name: "Osvaldo Camacho",
		});
	});
});
