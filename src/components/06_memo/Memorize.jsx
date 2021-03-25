import React, { useState } from "react";
import "../02_useeffect/useeffect.css";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
	const { increment, state } = useCounter(1);
	const [show, setShow] = useState(false);
	return (
		<div>
			<h1>Memorize</h1>
			<hr />

			<h2>
				useCounter : <Small value={state} />
			</h2>

			<button className="btn btn-primary" onClick={increment}>
				Incrementar +1
			</button>

			<button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
				Show /hide {JSON.stringify(show)}
			</button>
		</div>
	);
};

export default Memorize;
