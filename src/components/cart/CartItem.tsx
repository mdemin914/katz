import {
  Button,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
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
  name: {
    width: 100,
  },
});

export const CartItem = ({ cat }: CartItemProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  return (
    <Grid xs={12} item container>
      <Grid item xs={6} container justifyContent="center">
        <Image src={cat.image} height={100} width={100} alt={cat.name} />
      </Grid>
      <Grid item xs={6}>
        <div className={classes.catInfo}>
          <Tooltip title={cat.name}>
            <Typography noWrap>{cat.name}</Typography>
          </Tooltip>
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
    </Grid>
  );
};
