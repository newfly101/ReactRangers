import {makeAutoObservable} from "mobx";


class AccountRecoveryStore {
  //state
  checkFlag = true;

  constructor(){
    makeAutoObservable(this)
  }

  //action

  clickFlagTrue=()=>{
    this.checkFlag = true
  };
  clickFlagFalse =()=>{
    this.checkFlag = false
  }
}

export default AccountRecoveryStore