import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas a Todo List Item", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	const index = 1;

	const wrapper = shallow(
		<TodoListItem
			todo={demoTodos[0]}
			index={index}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);

	// // beforeEach(() => {
	// // 	//para resetear el llamado de funciones
	// // 	// jest.clearAllMocks();
	// // });
	test("debe mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe de llamar a la función handleDelete", () => {
		wrapper.find(".btn-danger").simulate("click");
		// expect(handleDelete).toHaveBeenCalledWith(expect.any(Function));
		expect(handleDelete).toHaveBeenCalledTimes(1); //y
	});

	test("Debe de llamar a la función handleToggle", () => {
		wrapper.find("p").simulate("click");
		expect(handleToggle).toHaveBeenCalledTimes(1); //y
	});

	test("debe mostar el texto correctamente", () => {
		expect(wrapper.find("p").text().trim()).toBe(
			`${index + 1}. ${demoTodos[0].desc}`
		);
	});

	test("Debe agregar la clase complete  si el done es true", () => {
		const todo = demoTodos[0];
		todo.done = true;
		const wrapper = shallow(
			<TodoListItem
				todo={todo}
				index={1}
				handleDelete={handleDelete}
				handleToggle={handleToggle}
			/>
		);

		expect(wrapper.find("p").hasClass("complete")).toBeTruthy();
	});
});
