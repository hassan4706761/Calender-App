import React from "react";
import { TimePicker } from "antd";


const TimePickerDropdown = ({
  defaultValue,
  value,
  onChange,
  format = "HH:mm",
}) => {
  return (
    <TimePicker
      className="time-picker"
      defaultValue={defaultValue}
      value={value}
      format={format}
      onChange={onChange}
      suffixIcon={null}
      clearIcon={null}
      bordered={false}
    />
  );
};
export default TimePickerDropdown;
