import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ExpiryModal from "./ExpiryModal";

const FoodListElement = props => {
  const item = props.food;

  const [checked, setChecked] = useState([1]);
  const [openModal, setOpenModal] = useState(false);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const toggleModal = () => {
    setOpenModal(true);
  };

  const toggleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {openModal ? (
        <ExpiryModal
          open={openModal}
          func={toggleModalClose}
          food={item}
          quant={props.quantity}
          removeItem={props.removeItem}
        />
      ) : null}
      <ListItem key={item} button divider onClick={toggleModal}>
        <ListItemAvatar>
          <FastfoodIcon />
        </ListItemAvatar>
        <ListItemText
          id={props.labelid}
          primary={` ${item} x ${props.quantity}`}
          secondary={props.expiry}
        />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(item)}
            checked={checked.indexOf(item) !== -1}
            inputProps={{ "aria-labelledby": props.labelid }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default FoodListElement;
