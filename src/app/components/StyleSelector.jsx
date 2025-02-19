import React from "react";

const StyleSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="p-2 border rounded">
      <option>Minimalism</option>
      <option>Realism</option>
      <option>Tribal</option>
      <option>Sketch</option>
    </select>
  );
};
export default StyleSelector;