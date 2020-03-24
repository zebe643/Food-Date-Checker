import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  }
}));

const ExpiryModal = props => {
  const classes = useStyles();

  const open = useState(props.open);
  const [newQuant, setNewQuant] = useState(props.quant);

  const handleClose = () => {
    props.func(false);
  };

  const subtractFoodItem = () => {
    setNewQuant(newQuant - 1);
    props.removeItem(newQuant);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 100
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.food}</h2>
            <p id="transition-modal-description">{newQuant}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={subtractFoodItem}
            >
              <ExposureNeg1Icon />
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ExpiryModal;
