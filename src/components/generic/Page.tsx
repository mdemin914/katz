import { makeStyles } from "@material-ui/core";
import React from "react";
import { Cart } from "../cart/Cart";
import { Toolbar } from "./Toolbar";

interface PageProps {
  children: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

/**
 * A page that is shown to the user, includes the Toolbar and the Cart.
 */
export const Page = ({ children }: PageProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar />
      <Cart />
      {children}
    </div>
  );
};
