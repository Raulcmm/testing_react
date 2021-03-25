import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import useCounter from "../../hooks/useCounter";
import "../02_useeffect/useeffect.css";

const MemoHook = () => {
	const { increment, state } = useCounter(100);
	const [show, setShow] = useState(false);

	//para memorizar funciones que solo deben ejecutarse cuando cambia alguna dependencias
	//regresa una funcion que solo debe ser llamada por referencia
	//existe por que al cambiar el estado del componente y tener un re render se ejecuta de nuevo
	// lo que causa fugas de memoria
	//EN ESTE CASO SE RE RENDERIZA CUANDO SE CAMBIA EL ESTADO DE SHOW CON EL BOTON DE SHOW/HIDE
	const funcionMemorizada = useMemo(() => procesoPesado(state), [state]);
	return (
		<div>
			<h1>Memo Hook</h1>

			<h3>
				useCounter <small>{state}</small>
			</h3>
			<hr />
			<p>{funcionMemorizada}</p>

			<button className="btn btn-primary" onClick={increment}>
				Incrementar +1
			</button>

			<button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
				Show /hide {JSON.stringify(show)}
			</button>
		</div>
	);
};

export default MemoHook;
