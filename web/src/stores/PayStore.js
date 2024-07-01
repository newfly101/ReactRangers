import {makeAutoObservable} from "mobx";

class PayStore{

  constructor() {
    makeAutoObservable(this)
  }

}

export default PayStore