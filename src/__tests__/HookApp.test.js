import { shallow } from "enzyme";
import React from "react";

import HookApp from "../HookApp";

describe("Tests to <HookApp/>", () => {
	test("match", () => {
		const wrapper = shallow(<HookApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
