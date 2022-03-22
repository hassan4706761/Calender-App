import React from "react";
import {shallow} from "enzyme";
import CarouselComponent from "../Components/Carousel";

describe("Carousel rendering", () => {
    it("mounts without crashing", () => {
        const wrapper = shallow(<CarouselComponent />);
        wrapper.unmount();
    });
    test("check dom tree rendering", () => {
        let tree = shallow(<CarouselComponent />);
        expect(tree).toMatchSnapshot();
    });
});