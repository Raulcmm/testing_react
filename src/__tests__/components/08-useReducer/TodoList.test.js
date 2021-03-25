import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas TodoList", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	const wrapper = shallow(
		<TodoList
			todos={demoTodos}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);
	TodoList;
	test("Debe hacer match con el snapshot", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe pintar los todos (#)", () => {
		expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
	});

	test("Debe enviar dos  funciones en sus hijos", () => {
		const del = wrapper.find("TodoListItem").at(0).prop("handleDelete");
		expect(del).toEqual(expect.any(Function));
		const toggle = wrapper.find("TodoListItem").at(0).prop("handleToggle");
		expect(toggle).toEqual(expect.any(Function));
	});
});
