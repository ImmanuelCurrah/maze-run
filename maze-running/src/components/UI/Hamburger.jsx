import React, { Fragment } from "react";
import classes from "./Hamburger.module.css";

export default function Hamburger() {
  return (
    <Fragment>
      <div className={classes.hamburger}>
        <div className={classes.burger}></div>
        <div className={classes.burger}></div>
        <div className={classes.burger}></div>
        <div className={classes.burger}></div>
      </div>
    </Fragment>
  );
}
