import React from "react";

const CardHeader = ({ title }) => {
  return (
    <div className="face face1">
      <div className="content">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export { CardHeader };
