import * as React from "react";

const FilterBox = () => {
  return (
    <div className="self-end my-4 w-80">
      <label className="block text-left max-w-80">
        <span className="text-white">Filter By</span>
        <select className="form-select block w-full mt-1 bg-transparent border border-gray-900 text-white">
          <option value="css">CSS</option>
          <option  value="youtube">Youtube </option>
          <option  value="youtube">Youtube </option>
        </select>
      </label>
    </div>
  );
};

export default FilterBox;
