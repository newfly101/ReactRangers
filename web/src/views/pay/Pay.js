import React from 'react';
import classes from "../../css/pay/Pay.module.css"

const Pay = () => {
  return (
    <div className={classes.payWrapper}>
      <div>
        kakaoPay로 불쌍한 개발자에게 후원하기
      </div>
      <button>한 푼만 주세요</button>
    </div>
  );
};

export default Pay;