import React from "react";

const TimeInput = React.memo(({ label, value, onChange }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label><br />
      <input
        type="time"
        value={value}
        onChange={onChange}
        style={{ padding: "6px" }}
      />
    </div>
  );
});

export default TimeInput;
