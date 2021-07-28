import { Grid, makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { CatType } from "../../utils/types/cat";
import { useAppSelector, useAppDispatch } from "../../utils/redux/hooks";
import { addCat } from "../../utils/redux/slices/appSlice";

interface CatProps {
  cat: CatType;
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 140,
  },
});

/**
 * Render a single cat and its related info.
 */
export const Cat = ({ cat }: CatProps) => {
  const classes = useStyles();
  const cats = useAppSelector((state) => state.app.cats);
  const dispatch = useAppDispatch();

  const isCatInCart = cats.find((c) => c.id === cat.id);

  return (
    <Grid item xs={12} sm={4} container justifyContent="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={cat.image}
            title={cat.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {cat.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Cost: ${cat.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            disabled={!!isCatInCart}
            onClick={() => {
              dispatch(addCat(cat));
            }}
          >
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
