import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const portalElement = document.getAnimations("overlays");

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default function Modal(props) {
  return (
    <Fragment>
      {(createPortal(<Backdrop />), portalElement)}
      {
        (createPortal(<ModalOverlay>{props.children}</ModalOverlay>),
        portalElement)
      }
    </Fragment>
  );
}
