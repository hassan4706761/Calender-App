import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Space } from "antd";
import DateCard from "../Components/Card";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";
import Carousel from "../Components/Carousel";
import Booking from "./Booking";
import PropTypes from "prop-types";


const { Paragraph } = Typography;

const Calender = (props) => {
  const [displayDate, setDisplayDate] = useState("Today");
  const [datesData, setDatesData] = useState([]);
  const [show, setShow] = useState(true);

  const dateSetter = () => {
    const begin = moment(props.startDate); //today's date
    const end = moment(props.endDate); // another date

    const dateRange = [];
    while (end.diff(begin, "days") >= 0) {
      const isDisabled = !!props.disabledDates.includes(begin.format("YYYY-MM-DD"));
      dateRange.push({
        date: begin.format("YYYY-MM-DD"),
        day: begin.format("D"),
        dayOfWeek: begin.format("dddd"),
        month: begin.format("MMMM"),
        disabled: isDisabled,
      });
      begin.add(1, "days");
    }
    return setDatesData(dateRange);
  };

  useEffect(() => {
    dateSetter();
  }, []);

  return (
    <>
      <Row className="mainRow">
        <Col offset={7} span={10}>
          <Row className="secondRow">
            <Col span={24}>
              <Paragraph className="heading">Date</Paragraph>
              <Row className="dateRight">
                <Space>
                  <Paragraph className="display-date">{displayDate}</Paragraph>

                  {show ? (
                    <DownOutlined
                      onClick={() => setShow((a) => !a)}
                      className="outlined-icon"
                    />
                  ) : (
                    <UpOutlined
                      onClick={() => setShow((a) => !a)}
                      className="outlined-icon"
                    />
                  )}
                </Space>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              {show ? (
                <Carousel>
                  {datesData?.map((item, index) => (
                    <DateCard
                      key={index}
                      title={item?.month}
                      date={item.day}
                      day={item.dayOfWeek}
                      disabled={item.disabled}
                      setDisplayDate={setDisplayDate}
                      displayDateValue={item.date}
                    />
                  ))}
                </Carousel>
              ) : (
                <Booking />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

Calender.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  disabledDates: PropTypes.array,

};
Calender.defaultProps = {
  startDate :"2022-03-03",
  endDate: "2022-03-25",
  disabledDates : [
    "2022-03-05",
    "2022-03-18",
    "2022-03-21",
    "2022-03-24",
    "2022-03-27",
  ]
};

export default Calender;
