import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import moment from "moment";
import {
  DownOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import TImePickerDropdown from "../Components/TImePickerDropdown";

const { Paragraph } = Typography;

const Booking = () => {
  const [pickTime, setPickTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [durationInHours, setDurationInHours] = useState(0);
  const [durationInMinutes, setDurationInMinutes] = useState(0);

  function handleTimeChange(time) {
    const timeFormat = moment(time).format("HH:mm");
    setPickTime(timeFormat);
  }

  function handleDurationChange(time) {
    const timing = moment(time).format("HH:mm");
    setDuration(timing);
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
          <Paragraph className="headingShow" style={{ userSelect: "none" }}>
            Time
          </Paragraph>
          <Row className="timePicker">
            <TImePickerDropdown
              defaultValue={moment(pickTime, "HH:mm")}
              value={moment(pickTime, "HH:mm")}
              onChange={(time) => handleTimeChange(time)}
            />
            <DownOutlined style={{ fontSize: "20px", marginTop: "7px" }} />
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Paragraph className="headingShow" style={{ userSelect: "none" }}>
            Duration
          </Paragraph>
          <Row className="timePicker">
            <PlusCircleOutlined
              onClick={handleIncreaseDuration}
              style={{ fontSize: "24px" }}
            />
            <TImePickerDropdown
              defaultValue={moment(duration, "HH:mm")}
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
