import React from "react";
import Button from "./Button";

const ViewToggle = ({ handleViewToggle }) => {
  return (
    <div>
      <Button onClick={() => handleViewToggle(false)}>To Do</Button>
      <Button onClick={() => handleViewToggle(true)}>Done</Button>
    </div>
  );
};

export default ViewToggle;
