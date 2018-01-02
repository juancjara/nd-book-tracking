import React from "react";

// <option value="none" disabled>
// Move to...
// </option>

// <option value="currentlyReading">Currently Reading</option>
// <option value="wantToRead">Want to Read</option>
//   <option value="read">Read</option>
// <option value="none">None</option>
const Select = ({ options, value, onChange }) => (
  <select value={value} onChange={onChange}>
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
