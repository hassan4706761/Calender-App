import React from "react";
import { shallow } from "enzyme/build";
import Calender from "../Container/Calender";
import CalenderPage from "../Pages/CalenderPage";


describe("Calendar component", () => {

    it('renders a calendar with firstDate of "2022-03-03"' , () => {
        const wrapper = shallow(<CalenderPage />);
        expect(wrapper.find(Calender).prop("startDate")).toBe("2022-03-03");
    });


    it('renders a calendar with lastDate of "2022-04-03"', () => {
        const wrapper = shallow(<CalenderPage />);
        expect(wrapper.find(Calender).prop("endDate")).toBe("2022-03-25");
    });
});
