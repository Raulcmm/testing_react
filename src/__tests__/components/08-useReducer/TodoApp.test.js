import { act } from "@testing-library/react";
import React from "react";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
const { shallow, mount } = require("enzyme");

describe("Pruebas to TodoApp", () => {
	Storage.prototype.setItem = jest.fn();
	test("DEbe hacer match", () => {
		const wrapper = shallow(<TodoApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test("debe agregar un todo", () => {
		const wrapper = mount(<TodoApp />);
		act(() => {
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
		});
		expect(wrapper.find("h1").text().trim()).toBe("TodoApp ( 2 )");
		expect(localStorage.setItem).toHaveBeenCalledTimes(2);
	});
});

test("debe eliminar un todo", () => {
	const wrapper = mount(<TodoApp />);
	act(() => {
		wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
		wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
	});
	expect(wrapper.find("h1").text().trim()).toBe("TodoApp ( 0 )");
});
