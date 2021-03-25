import React from "react";
import { saveLocalStorage } from "../../helpers/helperLocalStorage";
import useForm from "../../hooks/useForm";

const TODO_APP = "todoApp";

const AddNewTodo = ({ dispatch }) => {
	const { formState, handleChange } = useForm({
		desc: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			...formState,
			done: false,
			id: Math.floor(Math.random() * 1000),
		};

		dispatch({
			type: "ADDTODO",
			payload: newTodo,
		});

		saveLocalStorage(TODO_APP, newTodo);
		e.target.reset();
	};

	return (
		<div className="col-md-3">
			<h2>Add new To Do</h2>
			<form onSubmit={handleSubmit} className="form-group d-flex flex-column ">
				<label>
					<input
						type="text"
						name="desc"
						placeholder="Nuevo todo"
						className="form-control mb-3"
						onChange={handleChange}
					/>
				</label>
				<button type="submit" className="btn btn-outline-info">
					Agregar
				</button>
			</form>
		</div>
	);
};

export default AddNewTodo;
