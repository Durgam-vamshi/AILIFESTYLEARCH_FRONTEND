import React from "react";

const TextInput = React.memo(({ label, value, onChange, type = "text" }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label><br />
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ padding: "6px", width: "100%" }}
      />
    </div>
  );
});

export default TextInput;
