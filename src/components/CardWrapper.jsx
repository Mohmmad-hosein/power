import React from "react";
import { Card } from "./Card";

const CardWrapper = ({ cardList, handleDelete }) => {
  return (
    <div className="container">
      {cardList.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            desc={item.description}
            onDelete={() => handleDelete(item.title)}
          />
        );
      })}
    </div>
  );
};

export { CardWrapper };
