import React from "react";

const Select = ({ size, values, defaultText, onChange }) => {
  // console.log(values);
  return (
    <div className={`${size} m-auto mt-4`}>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        defaultValue="cat"
        onChange={onChange}
      >
        <option value="cat" disabled>
          {defaultText}
        </option>
        {values.map((value) => {
          return (
            <option value={value} key={Math.random()}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
