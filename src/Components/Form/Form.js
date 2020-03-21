import React from "react";
import Styles from "./Form.module.css";
import AddFood from "./AddFood/AddFood";

const Form = () => {
  return (
    <React.Fragment>
      <div className={Styles.form}>
        <AddFood />
      </div>
    </React.Fragment>
  );
};

export default Form;
