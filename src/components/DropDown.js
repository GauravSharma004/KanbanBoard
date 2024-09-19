
import React from 'react';
import './KanbanBoard.css';
import menu from '../assets/Display.svg';

const DropDown = ({ groupBy, setGroupBy }) => {
  const handleSelectChange = (event) => {
    setGroupBy(event.target.value);
  };

  return (
    <div className="controls">
      <img src={menu} alt="Menu" />
      <select value={groupBy} onChange={handleSelectChange}>
        {['status', 'user', 'priority'].map(option => (
          <option key={option} value={option}>
            {`Group by ${option.charAt(0).toUpperCase() + option.slice(1)}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;


