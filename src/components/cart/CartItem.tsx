import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { CatType } from "../../utils/types/cat";
import Image from "next/image";
import { useAppDispatch } from "../../utils/redux/hooks";
import { removeCat } from "../../utils/redux/slices/appSlice";

interface CartItemProps {
  cat: CatType;
}

const useStyles = makeStyles({
  catInfo: {
    marginLeft: 16,
  },
  media: {
    height: 140,
  },
});

export const CartItem = ({ cat }: CartItemProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Grid xs={12} item alignItems="center" container>
      <Image src={cat.image} height={100} width={100} alt={cat.name} />
      <div className={classes.catInfo}>
        <Typography>{cat.name}</Typography>
        <Typography>${cat.price}</Typography>
        <Button
          onClick={() => {
            dispatch(removeCat(cat));
          }}
        >
          Remove
        </Button>
      </div>
    </Grid>
  );
};
