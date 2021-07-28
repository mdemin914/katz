import {
  Grid,
  Hidden,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React from "react";
import { CatType } from "../../utils/types/cat";
import Image from "next/image";
import { useAppDispatch } from "../../utils/redux/hooks";
import { removeCat } from "../../utils/redux/slices/appSlice";
import { DeleteOutline } from "@material-ui/icons";

interface CartItemProps {
  cat: CatType;
}

export const CartItem = ({ cat }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Hidden xsDown>
        <Grid item sm={3}>
          <Image
            src={cat.image}
            alt={cat.name}
            width="100px"
            height="100px"
            layout="responsive"
          />
        </Grid>
      </Hidden>
      <Grid item xs={5} sm={4}>
        <Tooltip title={cat.name}>
          <Typography variant="body2">{cat.name}</Typography>
        </Tooltip>
      </Grid>
      <Grid item xs={5} sm={3}>
        <Typography variant="body2">${cat.price}</Typography>
      </Grid>
      <Grid item xs={2} sm={1}>
        <IconButton
          size="small"
          onClick={() => {
            dispatch(removeCat(cat));
          }}
        >
          <DeleteOutline />
        </IconButton>
      </Grid>
    </Grid>
  );
};
