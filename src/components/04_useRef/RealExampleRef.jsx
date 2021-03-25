import React, { useState } from "react";

import MultipleCustomHooks from "../03_examples/MultipleCustomHooks.jsx";
import "../02_useeffect/useeffect.css";
const RealExampleRef = () => {
	const [show, setShow] = useState(false);
	return (
		<div>
			<h1>Real example ref</h1>
			<hr />
			{show && <MultipleCustomHooks />}

			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				Show/hide
			</button>
		</div>
	);
};

export default RealExampleRef;
