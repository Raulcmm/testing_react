import { act } from "@testing-library/react-hooks";
import { mount, shallow } from "enzyme";
import React from "react";
import AboutScreen from "../../../components/09-useContext/AboutScreen";
import UserContextProvider, {
	userContext,
} from "../../../components/09-useContext/userContext";

describe("Tests to AboutScreen", () => {
	const wrapper = mount(
		<UserContextProvider>
			<AboutScreen />
		</UserContextProvider>
	);

	test("Debe  hacer match", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("debe mostrar la data del usuario", () => {
		const pre = wrapper.find("pre").text().trim().includes("Raul Camacho");
		expect(pre).toBe(true);
	});

	test("Debe limpiar la informacion ", () => {
		wrapper.find("button").simulate("click");
		expect(wrapper.find("h2").text().trim()).toBe("");
	});
});
