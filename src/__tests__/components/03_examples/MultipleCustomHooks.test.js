import { shallow } from "enzyme";
import React from "react";

import MultipleCustomHooks from "../../../components/03_examples/MultipleCustomHooks";
// import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";

// //cuando se use en este archivo en lugar de usar el useFetch usa una implementacion del mismo
jest.mock("../../../hooks/useFetch");
// jest.mock("../../../hooks/useCounter");

//SI SE USA UNO MOCK EN ALGUN COMPONENTE ES "OBLIGATORIO " QUE
// SE USE EN TODAS LAS PRUEBAS POR ESO SE PONE EL BEFORE_EACH
// PERO EL FETCH NO POR QUE  SE NECESITAN DIFERENTES DATOS SI FUERAN IGUAL
// SE USA EN EL BEFORE_EACH

describe("Test to MultipleCustomHooks", () => {
	beforeEach(() => {
		// useCounter.mockReturnValue({ counter: 1, increment: () => {} });
		useFetch.mockReturnValue({ data: null, loading: true, error: null });
	});

	test("debe mostrarse correctamente", () => {
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find("alert").exists()).toBeFalsy();
	});

	test("debe de mostar  informacion", () => {
		useFetch.mockReturnValue({
			data: [{ id: 1, author: "Raul", quote: "Hola mundo" }],
			loading: false,
			error: null,
		});
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find("p").text()).toBe("Hola mundo");
		expect(wrapper.find(".alert").exists()).toBeTruthy();
		expect(wrapper.find("footer").text().trim()).toBe("Raul");
	});

	test("Debe retornar el valor por defecto del counter = 1", () => {
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find("small").text()).toBe("1");
	});

	test("debe regresar el valor de 10 del counter enviado como parametro", () => {
		const wrapper = shallow(<MultipleCustomHooks />);
		expect(wrapper.find("small").text()).toBe("1");
	});

	test("Debe incrementar +1 el counter", () => {
		const wrapper = shallow(<MultipleCustomHooks />);
		wrapper.find("button").simulate("click");
		expect(wrapper.find("small").text()).toBe("2");
	});
});
