import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";
import { toggleCart, clearCart } from "../../utils/redux/slices/appSlice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../../utils/numbers";

const useStyles = makeStyles({
  root: {
    width: 340,
  },
  total: {
    marginLeft: 78,
  },
});

export const Cart = () => {
  const { cats, isCartVisible } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const total = cats.reduce((acc, cat) => {
    acc += Number(cat.price);
    return acc;
  }, 0);

  const handleClose = () => {
    dispatch(toggleCart());
  };

  return (
    <Dialog
      open={isCartVisible}
      onClose={handleClose}
      aria-labelledby="shopping-cart"
    >
      <DialogTitle>Your Future Cats</DialogTitle>
      <DialogContent className={classes.root}>
        <ShoppingCartBody />
      </DialogContent>

      <DialogActions>
        <Typography>Total: {formatCurrency(total)}</Typography>
        <Button
          variant="outlined"
          disabled={cats.length === 0}
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear
        </Button>
        <Button
          onClick={handleClose}
          color="primary"
          variant="contained"
          disabled={cats.length === 0}
        >
          Checkout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ShoppingCartBody = () => {
  const cats = useAppSelector((state) => state.app.cats);
  return (
    <Grid container spacing={2} item xs={12}>
      {cats.map((c) => (
        <CartItem key={c.id} cat={c} />
      ))}
    </Grid>
  );
};
