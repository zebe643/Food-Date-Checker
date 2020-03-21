import React from "react";
import styles from "./MyFood.module.css";
import List from "@material-ui/core/List";
import FoodListElement from "./FoodListElement";
import Divider from "@material-ui/core/Divider";

const MyFood = props => {
  return (
    <div className={styles.foodlist}>
      <h1>My Food</h1>
      {props.foodList.map((item, index) => {
        const labelId = `checkbox-list-secondary-label-${item}`;
        return (
          <List>
            <List dense>
              <FoodListElement
                food={item.food}
                expiry={item.expiry}
                labelid={labelId}
                quantity={item.quantity}
              />
            </List>
            <Divider />
          </List>
        );
      })}
    </div>
  );
};

export default MyFood;
