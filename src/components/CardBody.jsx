import React from "react";

const CardBody = ({ desc }) => {
  return (
    <div className="content">
      <p>{desc}</p>
      <a href="#" type="button">
        Read More
      </a>
    </div>
  );
};

export { CardBody };
