import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import moment from "moment";
import {
  DownOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import TimePickerDropdown from "../Components/TimePickerDropdown";

const { Paragraph } = Typography;

const Booking = () => {
  const [eventTime, setEventTIme] = useState("00:00");
  const [eventDuration, setEventDuration] = useState("00:00");
  const [durationInHours, setDurationInHours] = useState(0);
  const [durationInMinutes, setDurationInMinutes] = useState(0);

  function handleEventTimeChange(time) {
    const timeFormat = moment(time).format("HH:mm");
    setEventTIme(timeFormat);
  }

  function handleDurationChange(time) {
    const timing = moment(time).format("HH:mm");
    setEventDuration(timing);
    const timeSplit = timing.split(":");
    setDurationInHours(Number(timeSplit[0]));
    setDurationInMinutes(Number(timeSplit[1]));
  }

  function handleIncreaseDuration() {
    if (durationInMinutes < 59 && durationInMinutes >= 0) {
      setDurationInMinutes(durationInMinutes + 1);
    } else if (durationInMinutes === 59) {
      setDurationInHours(durationInHours + 1);
      setDurationInMinutes(0);
    }
  }

  function handleDecreaseDuration() {
    if (durationInMinutes > 0) {
      setDurationInMinutes(durationInMinutes - 1);
    }
  }
  return (
    <div>
      <Row>
        <Col span={24}>
          <Paragraph className="headingShow">Time</Paragraph>
          <Row className="timePicker">
            <TimePickerDropdown
              defaultValue={moment(eventTime, "HH:mm")}
              value={moment(eventTime, "HH:mm")}
              onChange={(time) => handleEventTimeChange(time)}
            />
            <DownOutlined style={{ fontSize: "20px", marginTop: "7px" }} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Paragraph className="headingShow">Duration</Paragraph>
          <Row className="timePicker">
            <PlusCircleOutlined
              onClick={handleIncreaseDuration}
              style={{ fontSize: "24px" }}
            />
            <TimePickerDropdown
              defaultValue={moment(eventDuration, "HH:mm")}
              value={moment(`${durationInHours}:${durationInMinutes}`, "HH:mm")}
              format={"HH:mm"}
              onChange={(time) => handleDurationChange(time)}
            />
            <MinusCircleOutlined
              onClick={handleDecreaseDuration}
              style={{ fontSize: "24px" }}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Booking;
