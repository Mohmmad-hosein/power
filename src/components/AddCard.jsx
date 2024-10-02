import React from "react";
import "./AddCard.css";
import { Card } from "./Card";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const AddCard = ({ onSubmit }) => {
  const validation = yup.object().shape({
    title: yup.string().required("این فیلد اجباریست"),
    desc: yup.string().required(),
  });

  // const onSubmit = (values) => {
  //   console.log("Form submited!!!", values);
  //   setCardList([...cardList, values]);
  // };

  return (
    <div className="center">
      <input type="checkbox" id="show" />
      <label htmlFor="show" className="show-btn">
        Add Card
      </label>
      <div className="form-wrapper">
        <Formik
          initialValues={{ title: "", desc: "" }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validation}
        >
          {(form) => (
            <div className="form-container">
              <div className="left">
                <label
                  htmlFor="show"
                  className="close-btn fas fa-times"
                  title="close"
                >
                  X
                </label>
                <div className="text">Add Card</div>
                <Form>
                  <div className="data">
                    <label>Title</label>
                    <Field name="title" placeholder="title..." />
                    <ErrorMessage
                      name="title"
                      component={"p"}
                      className="error"
                    />
                  </div>
                  <div className="data">
                    <label>Description</label>
                    <Field name="desc" placeholder="description..." />
                    <ErrorMessage
                      name="desc"
                      component={"p"}
                      className="error"
                    />
                  </div>

                  <div className="btn">
                    <div className="inner"></div>
                    <button type="submit">Add</button>
                  </div>
                </Form>
              </div>
              <div className="right">
                <div className="container">
                  <Card
                    isFocused={true}
                    title={form.values.title}
                    desc={form.values.desc}
                  />
                </div>
              </div>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddCard;
