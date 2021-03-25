import React from "react";
import "./spiner.css";
const Spiner = () => {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Spiner;
