import React from "react";

import { AlertIcon } from "../assets";
import styles from "../styles";

const Alert = ({ type, message }) => {
  const capitalizedMessage =
    message?.charAt(0).toUpperCase() + message.slice(1);
  return (
    <div className={`${styles.alertContainer} ${styles.flexCenter}`}>
      <div className={`${styles.alertWrapper} ${styles[type]}`} role="alert">
        <AlertIcon type={type} />
        {capitalizedMessage}
      </div>
    </div>
  );
};

export default Alert;
