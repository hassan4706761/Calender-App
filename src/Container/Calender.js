import React, { useEffect, useState } from "react";
import { Col, Row, Typography, Space } from "antd";
import DateCard from "../Components/Card";
import "../Styles/Calender.less";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import moment from "moment";
import Carousel from "../Components/Carousel";
import Booking from "./Booking";

const { Paragraph } = Typography;

const Calender = (props) => {
  const { startDate, endDate, disabledDates } = props;
  const [datesData, setDatesData] = useState([]);
  const [show, setShow] = useState(true);

  const dateSetter = () => {
    const begin = moment(startDate); //today's date
    const end = moment(endDate); // another date
    const difference = moment.duration(end.diff(begin));
    const gap = difference.asDays();
    console.log(gap);
    const dateRange = [];
    for (let i = 0; i < gap; i += 1) {
      const isDisabled = !!disabledDates.includes(begin.format("YYYY-MM-DD"));
      dateRange.push({
        date: begin.format("YYYY-MM-DD"),
        day: begin.format("D"),
        dayOfWeek: begin.format("dddd"),
        month: begin.format("MMMM"),
        // disabled: isDisabled,
      });
      begin.add(1, "days");
    }
    return setDatesData(dateRange);
  };
  useEffect(() => {
    dateSetter();
    console.log(datesData);
  }, []);

  // console.log(datesData);

  return (
    <>
      <Row className="MainRow">
        <Col offset={7} span={10}>
          <Row style={{ marginBottom: "-30px" }}>
            <Col span={24}>
              <Paragraph className="heading" style={{ userSelect: "none" }}>
                Date
              </Paragraph>
              <Row className="dateRight">
                <Space>
                  <Paragraph
                    style={{
                      paddingRight: "5px",
                      fontSize: "20px",
                      marginBottom: "5px",
                      userSelect: "none",
                    }}
                  >
                    Today
                  </Paragraph>

                  {show ? (
                    <DownOutlined
                      onClick={() => setShow((a) => !a)}
                      style={{ fontSize: "20px" }}
                    />
                  ) : (
                    <UpOutlined
                      onClick={() => setShow((a) => !a)}
                      style={{ fontSize: "20px" }}
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
                  <DateCard />
                  <DateCard />
                  <DateCard />
                  <DateCard />
                  <DateCard />
                  <DateCard />
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
export default Calender;
