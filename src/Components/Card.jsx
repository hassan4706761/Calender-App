import React from "react";
import "../Styles/card.less";
import { Card, Col, Row } from "antd";

const DateCard = ({ onClick }) => {
  return (
    <Row>
      <Col span={24}>
        <Card title="June" hoverable onClick={onClick}>
          card content
        </Card>
      </Col>
    </Row>
  );
};
export default DateCard;
