import React from "react";
import classes from "./ConvertAccount.module.css";
import ConvertForm from "./ConvertForm";
import ConvertAccountTopText from "./ConvertAccountTopText";

const ConvertAccount = () => {
  return (
    <div className={classes.ConvertAccountWrapper}>
      <ConvertAccountTopText />
      <ConvertForm />
    </div>
  );
};

export default ConvertAccount;
