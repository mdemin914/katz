import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { CatType } from "../../utils/types/cat";
import { Cat } from "../cats/Cat";

interface CatsProps {
  cats?: CatType[];
}

const useStyles = makeStyles({
  root: {
    margin: 2,
  },
});

/**
 * Render the grid of cats.
 */
export const Cats = ({ cats }: CatsProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root} item xs={12}>
      {cats &&
        cats.map((cat) => {
          return <Cat key={cat.id} cat={cat} />;
        })}
    </Grid>
  );
};
