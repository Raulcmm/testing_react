import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import useForm from "../../hooks/useForm";

import "./introReducer.css";
import { getLocalStorage } from "../../helpers/helperLocalStorage";
import ListTodos from "./ListTodos";
import AddNewTodo from "./AddNewTodo";

const TODO_APP = "todoApp";

const init = () => [
	{
		id: 112344323432,
		desc: "Aprender React",
		done: false,
	},
];

const IntroReducer = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		const todos = getLocalStorage(TODO_APP);
		dispatch({
			type: "GET_TODOS_LS",
			payload: todos,
		});
	}, []);

	return (
		<div>
			<h1>TodoApp ({todos.length})</h1>
			<hr />
			<div className="row mt-5">
				<ListTodos todos={todos} dispatch={dispatch} />
				<AddNewTodo dispatch={dispatch} />
			</div>
		</div>
	);
};

export default IntroReducer;
