import React from "react";

const VisibilityControl = ({
  isChecked,
  showCompleted,
  setShowCompleted,
  cleanTask,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(!showCompleted)}
      />
      <label>Show Task Done</label>
      <button onClick={cleanTask}>Clear</button>
    </div>
  );
};

export default VisibilityControl;
