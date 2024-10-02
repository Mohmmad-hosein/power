import "./App.css";
import React, { Fragment, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { Card } from "./components/Card";
import AddCard from "./components/AddCard";
import { CardWrapper } from "./components/CardWrapper";
import { CourseWrapper } from "./components/CourseWrapper";
import { getCourseList } from "./core/services/api/course";
import { loginAPI } from "./core/services/api/auth";
import { setItem } from "./core/services/common/storage.services";
import { getProfile } from "./core/services/api/user";

const App = () => {
  const [courseList, setCourseList] = useState([]);

  const getList = async () => {
    const courses = await getCourseList(5);
    setCourseList(courses);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Fragment>
      <CourseWrapper courseList={courseList} />
    </Fragment>
  );
};

export default App;
