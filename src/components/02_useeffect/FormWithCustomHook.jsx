import React from "react";
import useForm from "../../hooks/useForm";

const FormWithCustomHook = () => {
	const state = {
		name: "",
		email: "",
		password: "",
	};
	const { handleChange, handleSubmit } = useForm(state);

	return (
		<form className="form-group" onSubmit={handleSubmit}>
			<h1>useEffect</h1>
			<hr />

			<div className="form-group">
				<input
					type="text"
					name="name"
					onChange={handleChange}
					className="form-control mb-4"
					placeholder="Tu nombre"
				/>
			</div>
			<div className="form-group">
				<input
					type="text"
					name="email"
					onChange={handleChange}
					className="form-control mb-4"
					placeholder="Tu correo"
				/>
			</div>
			<div className="form-group">
				<input
					type="password"
					name="password"
					onChange={handleChange}
					className="form-control mb-4"
					placeholder="****"
				/>
			</div>
			<div className="form-group">
				<button type="submit" className="btn btn-primary btn-outline">
					Enviar
				</button>
			</div>
		</form>
	);
};

export default FormWithCustomHook;
