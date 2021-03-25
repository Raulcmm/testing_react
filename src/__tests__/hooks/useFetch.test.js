import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe("Pruebas en useFetch", () => {
	test("Debe retornar la informacion por defecto", () => {
		const { result } = renderHook(() => useFetch());
		const { data, error, loading } = result.current;

		expect(data).toBeNull();
		expect(loading).toBeTruthy();
		expect(error).toBeNull();
	});

	test("debe regresar la data de una petición", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch("https://www.breakingbadapi.com/api/quotes/1")
		);
		await waitForNextUpdate({ timeout: 2000 });
		const { data, error, loading } = result.current;
		expect(data.length).toBe(1);
		expect(loading).toBeFalsy();
		expect(error).toBeNull();
	});
	test("Debe regresar el mensaje de error si no se cumplio ", async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetch("https://www.breakingbadapi.com/api/quots/1")
		);

		await waitForNextUpdate();
		const { data, loading, error } = result.current;

		expect(data).toBeNull();
		expect(loading).toBeFalsy();
		expect(error).toBe("No se pudo cargar");
	});
});
