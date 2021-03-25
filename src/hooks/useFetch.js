import { useEffect, useRef, useState } from "react";

const useFetch = (api_url) => {
	const isMounted = useRef(true);
	const [state, setState] = useState({ data: null, loading: true, error: null });

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		if (api_url === undefined) return state;
		setState({
			...state,
			loading: true,
		});
		fetch(api_url)
			.then((res) => res.json())

			.then((data) => {
				if (isMounted.current) {
					setState({
						...state,
						data,
						loading: false,
					});
				} else {
					console.warn("Se previnio una fuga");
				}
			})
			.catch((err) =>
				setState({ data: null, loading: false, error: "No se pudo cargar" })
			);
	}, [api_url]);

	return state;
};

export default useFetch;
