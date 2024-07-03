import {makeAutoObservable} from "mobx";
import axios from "axios";
import * as PortOne from "@portone/browser-sdk/v2";

class PayStore {
//state

 constructor() {
   makeAutoObservable(this)
 }

 //action
 async pay(){
   const response = await PortOne.requestPayment(
     {
       storeId: "store-a7369d77-3179-41d6-b442-16981f8f37e7",
       channelKey: "channel-key-a9d508d2-3972-4dc8-9509-e5072ff4ea61",
       paymentId: ` payment-${crypto.randomUUID()}`,
       orderName: "한푼만 줍쇼",
       totalAmount: 1000,
       currency: "CURRENCY_KRW",
       payMethod: "CARD",
     }
   );
   if (response.code != null){
     return alert(response.message)
   }
 }

}
export default PayStore;