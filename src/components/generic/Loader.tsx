import { CircularProgress, Theme } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const useLoaderStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
  })
);

/**
 * A spinner component to use when something is loading.
 */
export const Loader = () => {
  const classes = useLoaderStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
