import React from "react";
import { TimePicker } from "antd";

const TImePickerDropdown = ({ defaultValue, value, onChange }) => {
  return (
    <TimePicker
      style={{ width: "60px", userSelect: "none" }}
      defaultValue={defaultValue}
      value={value}
      format={"HH:mm"}
      onChange={onChange}
      suffixIcon={null}
      clearIcon={null}
      bordered={false}
    />
  );
};
export default TImePickerDropdown;
