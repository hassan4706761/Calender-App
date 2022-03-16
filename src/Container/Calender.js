import React, { useState } from "react";
import { Col, Row, Carousel, Drawer, Space, Button } from "antd";
import DateCard from "../Components/Card";
import "../Styles/Drawer.less";

const Calender = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Row style={{ margin: "3rem" }}>
        <Col span={18} className="site-drawer-render-in-current-wrapper">
          <Carousel
            autoplay
            touchMove={false}
            dots={true}
            slidesToShow={3}
            centerMode={true}
            draggable={true}
            swipeToSlide={true}
            touchThreshold={50}
            focusOnSelect={true}
            style={{ backgroundColor: "lightBlue ", height: "230px" }}
          >
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />
            <DateCard />
          </Carousel>

          <Drawer
            title="Drawer with extra actions"
            placement="bottom"
            onClose={onClose}
            visible={visible}
            getContainer={false}
            style={{ position: "absolute", height: "150px" }}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="primary" onClick={onClose}>
                  OK
                </Button>
              </Space>
            }
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </Col>
      </Row>
    </>
  );
};
export default Calender;
