import React from "react";

import { Card } from "antd";

const DateCard = () => {
  return (
    <Card
      title="June"
      headStyle={{
        backgroundColor: "lightGrey",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
      style={{
        width: 150,
        borderRadius: "10px",
        margin: "15px",
        border: "1px solid lightgrey",
      }}
      hoverable
    >
      <p>card content</p>
    </Card>
  );
};
export default DateCard;
