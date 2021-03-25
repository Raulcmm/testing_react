import { shallow } from "enzyme";
import React from "react";

import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas a TodoAdd", () => {
	const handleAddTodo = jest.fn();
	const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

	test("Debe hacer math", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("no debe llamar el handleAddTodo fn", () => {
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test("Debe llamar el handleAddTodo fn", () => {
		const value = "hola mundo";
		wrapper
			.find("input")
			.simulate("change", { target: { name: "description", value } });
		wrapper.find("form").simulate("submit", { preventDefault() {} });

		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); //{} incorrecto
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number),
			desc: value,
			done: false,
		}); //{} correcto

		expect(wrapper.find("input").text()).toBe("");
	});
});
