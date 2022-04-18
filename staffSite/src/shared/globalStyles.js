import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const globalStyles = makeStyles((theme) =>
  createStyles({
    rootLoader: {
      width: "100%",
      height: "100%",
      textAlign: "center",
    },
  })
);
export default globalStyles;
