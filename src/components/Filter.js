/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { months, users } from '../utils/custom';

const Filter = ({ handleChange }) => {
  const lChange = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  return (
    <div className="d-flex justify-content-between">
      <p>
        Filter by month:
        <select
          className="form-control d-inline-block"
          name="month"
          onChange={lChange}
        >
          <option value="">All</option>
          {months.map((month, idx) => (
            <option key={idx} value={idx}>
              {month}
            </option>
          ))}
        </select>
      </p>
      <p>
        Filter by Seller:
        <select
          className="form-control d-inline-block"
          name="seller"
          onChange={lChange}
        >
          <option value="">All</option>
          {users.map((user, idx) => (
            <option key={idx} value={user}>
              {user}
            </option>
          ))}
        </select>
      </p>
      <p className="">
        Select file:
        <input
          type="file"
          name="upload"
          id="upload"
          className="form-control-file"
        />
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="btn btn-primary mr-3"
        >
          Upload
        </button>
      </p>
    </div>
  );
};

export default Filter;
