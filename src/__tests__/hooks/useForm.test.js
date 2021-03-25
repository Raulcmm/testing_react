import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";

import useForm from "../../hooks/useForm";

describe("Test to useForm", () => {
	const valueForm = {
		name: "",
		age: "",
		lastName: "",
	};
	test("Debe regrear un formulario un objeto vacio si no se le manda nada", () => {
		const { result } = renderHook(() => useForm());
		const { formState } = result.current;
		expect(formState).toEqual({});
	});

	test("debe regresar un formulario por defecto", () => {
		const { result } = renderHook(() => useForm(valueForm));
		const { formState, handleChange } = result.current;

		expect(formState).toEqual(valueForm);
	});

	test("debe cambiar el valor del formulario (name)", () => {
		const { result } = renderHook(() => useForm());
		const { handleChange } = result.current;

		act(() => {
			handleChange({
				target: {
					name: "name",
					value: "Raul",
				},
			});
		});
		const { formState } = result.current;

		expect(formState).toEqual({ name: "Raul" });
	});

	test("debe restablecer el formulario con reset", () => {
		const { result } = renderHook(() => useForm(valueForm));
		const { handleReset } = result.current;
		// expect(formState).toEqual(valueForm);
		act(() => handleReset());
		const { formState } = result.current;
		expect(formState).toEqual({});
	});
});
