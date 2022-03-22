import React from "react";
import {shallow} from "enzyme";
import DateCard from "../Components/Card";

describe("date card rendering", () => {
    it("mounts without crashing", () => {
        const wrapper = shallow(<DateCard />);
        wrapper.unmount();
    });
    test("check dom tree rendering", () => {
        let tree = shallow(<DateCard />);
        expect(tree).toMatchSnapshot();
    });
});