import React from "react";

const ThemeSelector = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="p-2 border rounded">
      <option>Animals</option>
      <option>Mythology</option>
      <option>Symbols</option>
      <option>Space</option>
    </select>
  );
};

export default ThemeSelector;