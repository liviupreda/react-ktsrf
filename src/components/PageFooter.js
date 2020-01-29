import React from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "../styles/PageFooterStyles";

function PageFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.footer}>
      Liviu Preda 2020
      {/* <span className={classes.footerEmoji}>{emoji}</span> */}
    </footer>
  );
}

export default withStyles(styles)(PageFooter);
