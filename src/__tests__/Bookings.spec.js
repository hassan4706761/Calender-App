import React from "react";
import {shallow} from "enzyme";
import Booking from "../Container/Booking";

describe("Bookings Rendering rendering", () => {
    it("mounts without crashing", () => {
        const wrapper = shallow(<Booking />);
        wrapper.unmount();
    });
    test("check dom tree rendering", () => {
        let tree = shallow(<Booking />);
        expect(tree).toMatchSnapshot();
    });
});