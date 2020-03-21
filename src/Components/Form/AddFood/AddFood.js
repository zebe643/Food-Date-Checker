import React, { useState } from "react";
//importing ui modules
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
//import stylesheet
import styles from "./AddFood.module.css";
//import other components
import MyFood from "../MyFood/MyFood";
//import data
import sampledata from "../../../SampleData.json";

const AddFood = () => {
  const todays_date = new Date();

  const todaysDateString =
    ("0" + todays_date.getDate()).slice(-2) +
    "/" +
    ("0" + (todays_date.getMonth() + 1)).slice(-2) +
    "/" +
    todays_date.getFullYear();

  const [foodItem, setFoodItem] = useState("");
  const [foodExpiry, setFoodExpiry] = useState(todaysDateString);
  const [foodQuantity, setFoodQuantity] = useState("");
  const [addedFoodList, setAddedFoodList] = useState(sampledata);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleFormSubmit = () => {
    let foodObj = {
      food: foodItem,
      quantity: foodQuantity,
      expiry: foodExpiry
    };
    setAddedFoodList(addedFoodList => [...addedFoodList, foodObj]);
    setFoodItem("");
    setFoodExpiry();
    setFoodQuantity("");
    setSelectedDate(new Date());
  };

  const handleDateChange = date => {
    const MyDateString =
      ("0" + date.getDate()).slice(-2) +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear();

    setSelectedDate(date);
    setFoodExpiry(MyDateString);
  };

  return (
    <div className={styles.foodseg}>
      <div className={styles.topinside}></div>
      <h1>Add Food</h1>
      <div className={styles.formbody}>
        <div>
          <TextField
            onChange={e => setFoodItem(e.target.value)}
            value={foodItem}
            label="Food type"
          />
        </div>
        <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Expiry Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div>
          <TextField
            onChange={e => setFoodQuantity(e.target.value)}
            value={foodQuantity}
            label="Quantity"
          />
        </div>
      </div>
      <div className={styles.buttondiv}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Add Food!
        </Button>
      </div>
      <MyFood foodList={addedFoodList} />
    </div>
  );
};

export default AddFood;
