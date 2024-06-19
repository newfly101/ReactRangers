import {makeAutoObservable} from "mobx";
import { dummyCardLife } from "../component/story/dummyData/StoryDummyDataLife"
import { dummyCardCulture } from "../component/story/dummyData/StoryDummyDataCulture";
import { dummyCardIt } from "../component/story/dummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "../component/story/dummyData/StoryDummyDataCurrent";
import { dummyCardSport } from "../component/story/dummyData/StoryDummyDataSport";
import { dummyCardTravel } from "../component/story/dummyData/StoryDummyDataTravel";
import { dummyItemLife } from "../component/story/dummyData/StoryDummyDataLife";
import { dummyItemCulture } from "../component/story/dummyData/StoryDummyDataCulture";
import { dummyItemIt } from "../component/story/dummyData/StoryDummyDataIt";
import { dummyItemCurrent } from "../component/story/dummyData/StoryDummyDataCurrent";
import { dummyItemSport } from "../component/story/dummyData/StoryDummyDataSport";
import { dummyItemTravel } from "../component/story/dummyData/StoryDummyDataTravel";


const tagsName = [
    {tagName: "라이프", dataName: "life"},
    {tagName: "여행.맛집", dataName: "travel"},
    {tagName: "문화.연예", dataName: "culture"},
    {tagName: "IT", dataName: "it"},
    {tagName: "스포츠", dataName: "sport"},
    {tagName: "시사", dataName: "current"}
];

// 함수형 store
// const StoryStore = () => {
//     return makeAutoObservable({
//         //state
//         tagsName: tagsName,
//         dummyData: {
//             dataName: 'life',
//             cardData: dummyCardLife,
//             itemData: dummyItemLife,
//         },
//
//         //method
//         convertData(clickTag){
//             this.dummyData.dataName = clickTag;
//             console.log(clickTag)
//             switch(clickTag){
//                 case "life":
//                     this.dummyData.cardData = dummyCardLife;
//                     this.dummyData.itemData = dummyItemLife;
//                     break;
//                 case "travel":
//                     this.dummyData.cardData = dummyCardTravel;
//                     this.dummyData.itemData = dummyItemTravel;
//                     break;
//                 case "culture":
//                     this.dummyData.cardData = dummyCardCulture;
//                     this.dummyData.itemData = dummyItemCulture;
//                     break;
//                 case "it":
//                     this.dummyData.cardData = dummyCardIt;
//                     this.dummyData.itemData = dummyItemIt;
//                     break;
//                 case "sport":
//                     this.dummyData.cardData = dummyCardSport;
//                     this.dummyData.itemData = dummyItemSport;
//                     break;
//                 case "current":
//                     this.dummyData.cardData = dummyCardCurrent;
//                     this.dummyData.itemData = dummyItemCurrent;
//                     break;
//                 default:
//             }
//         }
//     })
//
// }


//클래스형 store
class StoryStore {
    tagsName =tagsName;
    dummyData = {
            dataName: 'life',
            cardData: dummyCardLife,
            itemData: dummyItemLife,
        }

    constructor() {
        makeAutoObservable(this);
    }

    convertData(clickTag){
            this.dummyData.dataName = clickTag;

            console.log(clickTag)
            switch(clickTag){
                case "life":
                    this.dummyData.cardData = dummyCardLife;
                    this.dummyData.itemData = dummyItemLife;
                    break;
                case "travel":
                    this.dummyData.cardData = dummyCardTravel;
                    this.dummyData.itemData = dummyItemTravel;
                    break;
                case "culture":
                    this.dummyData.cardData = dummyCardCulture;
                    this.dummyData.itemData = dummyItemCulture;
                    break;
                case "it":
                    this.dummyData.cardData = dummyCardIt;
                    this.dummyData.itemData = dummyItemIt;
                    break;
                case "sport":
                    this.dummyData.cardData = dummyCardSport;
                    this.dummyData.itemData = dummyItemSport;
                    break;
                case "current":
                    this.dummyData.cardData = dummyCardCurrent;
                    this.dummyData.itemData = dummyItemCurrent;
                    break;
                default:
            }
        };
}


export default StoryStore;