import React, { useLayoutEffect, useRef, useState } from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "./layout.css";
const Layout = () => {
	const pTag = useRef();
	const [boxes, setBoxes] = useState();
	const { state: counter, increment } = useCounter(1);
	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;

	const { data } = useFetch(url);
	const { quote } = !!data && data[0];

	useLayoutEffect(() => {
		setBoxes(pTag.current.getBoundingClientRect());
		return () => {};
	}, [quote]);

	return (
		<div>
			<h1>Layout Effect</h1>
			<hr />

			<div className="alert alert-success text-center ">
				<blockquote className="blockquote ">
					<p className="mb-5" ref={pTag}>
						{quote}
					</p>
				</blockquote>
			</div>

			<pre>{JSON.stringify(boxes, null, 3)}</pre>
			<button className="btn btn-primary" onClick={increment}>
				Siguiente
			</button>
		</div>
	);
};

export default Layout;
