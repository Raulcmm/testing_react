import React, { useEffect, useState } from "react";

const Mensajes = () => {
	const [coors, setCoors] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const moveMouse = (e) => {
			// console.log(e);

			const coors = { x: e.x, y: e.y };
			setCoors(coors);
		};

		window.addEventListener("mousemove", moveMouse);

		return () => {
			window.removeEventListener("mousemove", moveMouse);
		};
	}, []);

	return (
		<>
			<h1>Eres genial!</h1>
			<pre>{JSON.stringify(coors)}</pre>
		</>
	);
};

export default Mensajes;
