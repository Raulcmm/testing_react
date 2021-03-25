import { useState } from "react";

const useForm = (initialState = {}) => {
	const [formState, setFormState] = useState(initialState);

	const handleChange = ({ target }) => {
		setFormState({
			...formState,
			[target.name]: target.value,
		});
	};

	const handleReset = () => {
		setFormState({});
	};

	return { formState, handleChange, handleReset };
};

export default useForm;
