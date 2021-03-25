import React, { useRef } from "react";
import "../02_useeffect/useeffect.css";
const FocusScreen = () => {
	const inputRef = useRef();

	const handleClick = () => {
		inputRef.current.select();
	};

	return (
		<div>
			<h1>Focus Screen</h1>
			<input
				type="text"
				className="form-control"
				placeholder="Tu nombre"
				ref={inputRef}
			/>

			<button className="btn btn-primary mt-5" onClick={handleClick}>
				Focus
			</button>
		</div>
	);
};

export default FocusScreen;
