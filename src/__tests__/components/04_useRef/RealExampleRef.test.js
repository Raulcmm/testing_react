import React from "react";
import { shallow } from "enzyme";
import RealExampleRef from "../../../components/04_useRef/RealExampleRef";

describe("Pruebas en RealExampleRef", () => {
	test("Debe mostrarse correctamente", () => {
		const wrapper = shallow(<RealExampleRef />);
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe mostrarse el componente MultipleCustomHooks", () => {
		const wrapper = shallow(<RealExampleRef />);
		wrapper.find("button").simulate("click");

		expect(wrapper.find("MultipleCustomHooks").exists()).toBeTruthy();
	});
});
