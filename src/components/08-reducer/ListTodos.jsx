import React from "react";
import {
	changeStatusLocalStorage,
	deleteLocalStorage,
} from "../../helpers/helperLocalStorage";

const TODO_APP = "todoApp";

const ListTodos = ({ todos = [], dispatch }) => {
	const handleDeleteTodo = (todo) => {
		dispatch({
			type: "DELETE_TODO",
			payload: todo.id,
		});
		deleteLocalStorage(TODO_APP, todo);
	};

	const handleChangeStatus = (todo) => {
		dispatch({
			type: "CHANGE_STATUS",
			payload: todo.id,
		});

		changeStatusLocalStorage(TODO_APP, todo);
	};
	return (
		<div className="col-md-6 ">
			<ul className="list-group list-group-flush">
				{todos.map((todo, i) => (
					<li
						className={`list-group-item ${
							todo.done && "complete"
						} d-flex justify-content-between`}
						key={todo?.id}
					>
						{i + 1}. {todo.desc}
						<button
							className="btn btn-danger"
							onClick={() => handleDeleteTodo(todo)}
						>
							Eliminar
						</button>
						<button
							className="btn btn-outline-primary"
							onClick={() => handleChangeStatus(todo)}
						>
							{todo.done ? "pending" : "done"}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListTodos;
