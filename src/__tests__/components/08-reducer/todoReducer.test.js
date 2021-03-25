import { todoReducer } from "../../../components/08-reducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
	test("Debe retornar el estado por defecto", () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toHaveLength(2);
		expect(state).toEqual(demoTodos);
	});
	test("Debe agrear un todo", () => {
		const newTodo = {
			id: 3,
			desc: "Hola mundo",
			done: false,
		};
		const state = todoReducer(demoTodos, { type: "ADDTODO", payload: newTodo });
		expect(state).toHaveLength(3);
	});

	test("Debe borrar un todo", () => {
		const action = {
			type: "DELETE_TODO",
			payload: 1,
		};
		const state = todoReducer(demoTodos, action);
		expect(state).toHaveLength(1);
	});

	test("Debe hacer el TOOGLE del TODO", () => {
		const action = {
			type: "CHANGE_STATUS",
			payload: 1,
		};
		const state = todoReducer(demoTodos, action);

		expect(state[0].done).toBeTruthy();
		expect(state[1]).toEqual(demoTodos[1]);
	});
});
