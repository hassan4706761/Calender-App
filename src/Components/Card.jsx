import React from "react";
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
                    moment(displayDateValue).format("DD MMMM YYYY")
                  )
              : null
          }
        >
          <Title className="card-date">{date}</Title>
          <Paragraph className="card-day">
            {disabled ? "Closed" : day}
          </Paragraph>
        </Card>
      </Col>
    </Row>
  );
};
export default DateCard;
