import React from "react";
import Calender from "../Container/Calender";
import moment from "moment";

const CalenderPage = () => {
  const startDate = moment("2022-03-01");
  const endDate = moment("2022-03-25");
  const disabledDates = [
    "2022-03-05",
    "2022-03-18",
    "2022-03-21",
    "2022-03-24",
    "2022-03-27",
  ];
  return (
    <Calender
      startDate={startDate}
      endDate={endDate}
      disabledDates={disabledDates}
    />
  );
};
export default CalenderPage;
