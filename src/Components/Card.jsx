import React from "react";
import "../Styles/card.less";
import { Card, Col, Row, Typography } from "antd";
import moment from "moment";

const { Title, Paragraph } = Typography;
const DateCard = ({
  title,
  date,
  day,
  disabled,
  setDisplayDate,
  displayDateValue,
}) => {
  return (
    <Row>
      <Col span={24}>
        <Card
          className={disabled ? "cardsCursor" : ""}
          title={title}
          hoverable
          headStyle={disabled ? { backgroundColor: "grey" } : null}
          onClick={
            !disabled
              ? () =>
                  setDisplayDate(
                    `${moment(displayDateValue).format("D")}. ${moment(
                      displayDateValue
                    ).format("MMMM")} ${moment(displayDateValue).format(
                      "YYYY"
                    )}`
                  )
              : null
          }
        >
          <Title style={{ marginBottom: "3px" }}>{date}</Title>
          <Paragraph style={{ fontSize: "20px" }}>
            {disabled ? "Closed" : day}
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
};
export default DateCard;
