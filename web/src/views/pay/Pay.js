import React from 'react';
import classes from "../../css/pay/Pay.module.css"
import {Observer, useLocalObservable} from "mobx-react";
import PayStore from "../../stores/PayStore";


const Pay = () => {
  const payStore = useLocalObservable(() => new PayStore());
  return (
    <Observer>
      {() => (
        <div className={classes.payWrapper}>
          <div>
            PortOne으로 불쌍한 개발자에게 후원하기
          </div>
          <button onClick={payStore.pay}>한 푼만 주세요</button>
        </div>
      )}
    </Observer>
  );
};

export default Pay;