import React from "react";
import {shallow} from "enzyme";
import App from "../App"

describe("App Rendering", () => {
    it("mounts without crashing", () => {
        const wrapper = shallow(<App />);
        wrapper.unmount();
    });
    test("check dom tree rendering", () => {
        let tree = shallow(<App />);
        expect(tree).toMatchSnapshot();
    });
});