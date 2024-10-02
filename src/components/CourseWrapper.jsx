import React from "react";
import { Card } from "./Card";

const CourseWrapper = ({ courseList }) => {
  return (
    <div className="container">
      {courseList.map((item, index) => {
        return <Card key={index} title={item.title} desc={item.describe} />;
      })}
    </div>
  );
};

export { CourseWrapper };
