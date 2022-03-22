import React from "react";
import {shallow} from "enzyme";
import TimePickerDropdown from "../Components/TimePickerDropdown";

describe("Time Picker rendering", () => {
    it("mounts without crashing", () => {
        const wrapper = shallow(<TimePickerDropdown />);
        wrapper.unmount();
    });
    test("check dom tree rendering", () => {
        let tree = shallow(<TimePickerDropdown />);
        expect(tree).toMatchSnapshot();
    });
});