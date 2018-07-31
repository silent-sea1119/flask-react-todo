import React from "react";
import Button from "./Button";

const ViewToggle = ({ handleViewToggle, showDone }) => {
  return (
    <div className="btn-group" role="group">
      <Button
        className={
          "nav-link btn btn-" + (showDone ? "outline-secondary" : "primary")
        }
        onClick={() => handleViewToggle(false)}
        disabled={!showDone}
      >
        To Do
      </Button>
      <Button
        className={
          "nav-link btn btn-" + (showDone ? "primary" : "outline-secondary")
        }
        onClick={() => handleViewToggle(true)}
        disabled={showDone}
      >
        Done
      </Button>
    </div>
  );
};

export default ViewToggle;
