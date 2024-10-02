import React from "react";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

const Card = ({ title, desc, onDelete, isFocused }) => {
  // Class => this.props
  // Functional => const Card = ({title, desc, ...}) => {}

  return (
    <div className={"card " + (isFocused ? "focused" : "")} onClick={onDelete}>
      <CardHeader title={title} />

      <div className="face face2">
        <CardBody desc={desc} />
      </div>
    </div>
  );
};

export { Card };
