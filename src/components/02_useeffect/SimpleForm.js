import React, { useEffect, useState } from "react";
import Mensajes from "./Mensajes";
import "./useeffect.css";

const SimpleForm = () => {
	const [state, setState] = useState({
		name: "",
		email: "",
	});

	const { name, email } = state;

	const handleChange = ({ target }) => {
		setState({
			...state,
			[target.name]: target.value,
		});
	};

	useEffect(() => {
		//Solo se ejecuta cuando carga el componente, esto gracias al arreglo de dependencias
		console.log("hey!");
	}, []);

	useEffect(() => {
		//Se ejecuta cuando algo en el arreglo de depencias cambio
		console.log("Se cambió el name!");
	}, [name]);

	useEffect(() => {
		//Se ejecuta cuando algo en el arreglo de depencias cambio
		console.log("Se cambió el email!");
	}, [email]);

	return (
		<>
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
					className="form-control"
					placeholder="Tu correo"
				/>
			</div>

			{name === "123" && <Mensajes />}
		</>
	);
};

export default SimpleForm;
