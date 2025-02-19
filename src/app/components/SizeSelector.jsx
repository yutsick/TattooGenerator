import React from "react";

const SizeSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="p-2 border rounded">
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
    </select>
  );
};

export default SizeSelector;