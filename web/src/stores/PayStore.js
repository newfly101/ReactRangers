import {makeAutoObservable} from "mobx";
import axios from "axios";

class PayStore{

  constructor() {
    makeAutoObservable(this)
  }

  openPayPage =()=>{

  }
}

export default PayStore