import { mount } from "enzyme";
import React from "react";
import AppRouter from "../../../components/09-useContext/AppRouter";
import { userContext } from "../../../components/09-useContext/userContext";

describe("Test to AppRouter", () => {
	const user = { id: 1, name: "Raul" };
	const wrapper = mount(
		<userContext.Provider value={{ user }}>
			<AppRouter />
		</userContext.Provider>
	);

	test("Match con el snap", () => {
		expect(wrapper).toMatchSnapshot();
	});
});
