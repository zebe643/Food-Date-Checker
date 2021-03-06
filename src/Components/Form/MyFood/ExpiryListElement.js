import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import ScheduleIcon from "@material-ui/icons/Schedule";

const ExpiryListElement = props => {
  const item = props.expiry;

  const [checked, setChecked] = React.useState([1]);

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

  return (
    <div>
      <ListItem key={item} button>
        <ListItemAvatar>
          <ScheduleIcon />
        </ListItemAvatar>
        <ListItemText id={props.labelid} primary={` ${item}`} />
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

export default ExpiryListElement;
