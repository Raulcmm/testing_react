import React from "react";
import useCounter from "../../hooks/useCounter";
import { renderHook, act } from "@testing-library/react-hooks";

describe("test to useCounter", () => {
	const { result } = renderHook(useCounter);
	const { counter, increment, decrement, reset } = result.current;
	test("Debe regresar los valores por defecto", () => {
		expect(counter).toBe(10);
		expect(typeof increment).toBe("function");
		expect(typeof decrement).toBe("function");
		expect(typeof reset).toBe("function");
	});

	test("Debe aumentar el contador +1", () => {
		const { result } = renderHook(() => useCounter());
		const { increment, reset } = result.current;
		act(() => increment());
		const { counter } = result.current;
		expect(counter).toBe(11);
	});

	test("Debe disminuir el contador -1", () => {
		const { result } = renderHook(() => useCounter());
		const { decrement } = result.current;

		act(() => {
			decrement();
		}); //9

		const { counter } = result.current;
		expect(counter).toBe(9); //9
	});
	test("Debe resetar el contador", () => {
		const { result } = renderHook(() => useCounter());
		const { decrement, reset } = result.current;
		act(() => {
			decrement(); //9
			reset(); //10
		});

		const { counter } = result.current;
		expect(counter).toBe(10); //10
	});
});
