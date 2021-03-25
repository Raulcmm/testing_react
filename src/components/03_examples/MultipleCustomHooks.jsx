import React from "react";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import "../02_useeffect/useeffect.css";
import Spiner from "../Spiner";

const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
	const { loading, data } = useFetch(url);
	const { author, quote } = !!data && data[0];

	return (
		<div>
			<h1>Custom Hooks</h1>
			<hr />

			{loading ? (
				<Spiner />
			) : (
				<div className="alert alert-success text-center ">
					<blockquote className="blockquote ">
						<p className="mb-5">{quote}</p>
						<footer className="blockquote-footer">{author}</footer>
					</blockquote>
				</div>
			)}
			<button className="btn btn-primary" onClick={increment}>
				Siguiente
			</button>
			<small>{counter}</small>
		</div>
	);
};

export default MultipleCustomHooks;
