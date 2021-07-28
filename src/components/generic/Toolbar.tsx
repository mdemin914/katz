import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Badge, Toolbar as MUIToolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { toggleCart } from "../../utils/redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "../../utils/redux/hooks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    spacing: {
      // so the app bar does not cover the content below it
      height: 64,
    },
  })
);

/**
 * Top level menu.
 */
export const Toolbar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const cats = useAppSelector((state) => state.app.cats);

  return (
    <>
      <AppBar position="fixed">
        <MUIToolbar>
          <Typography variant="h6" className={classes.title}>
            Katz Katz Katz
          </Typography>
          <IconButton
            aria-label="shopping-cart"
            color="inherit"
            onClick={() => {
              dispatch(toggleCart());
            }}
          >
            <Badge badgeContent={cats.length} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </MUIToolbar>
      </AppBar>
      <div className={classes.spacing} />
    </>
  );
};
