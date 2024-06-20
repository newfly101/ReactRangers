import {makeAutoObservable} from "mobx";
import { dummyCardLife } from "../component/story/dummyData/StoryDummyDataLife"
import { dummyCardCulture } from "../component/story/dummyData/StoryDummyDataCulture";
import { dummyCardIt } from "../component/story/dummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "../component/story/dummyData/StoryDummyDataCurrent";
import {dummyCardSport, dummyItemSport2} from "../component/story/dummyData/StoryDummyDataSport";
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

const dummyDataMapping = {
    life: {dataName: 'life', cardData: dummyCardLife, itemData: dummyItemLife },
    travel: { dataName: 'travel',cardData: dummyCardTravel, itemData: dummyItemTravel },
    culture: {dataName: 'culture', cardData: dummyCardCulture, itemData: dummyItemCulture },
    it: {dataName: 'it', cardData: dummyCardIt, itemData: dummyItemIt },
    sport: { dataName: 'sport',cardData: dummyCardSport, itemData: dummyItemSport },
    current: {dataName: 'current', cardData: dummyCardCurrent, itemData: dummyItemCurrent },
};


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
//         //action
//          convertData(clickTag) {
//         if (dummyDataMapping[clickTag]) {
//             this.dummyData = dummyDataMapping[clickTag];
//         }
//         }
//     })
//
// }


//클래스형 store
class StoryStore {
    //state
    tagsName =tagsName;
    dummyData = dummyDataMapping.life;

    constructor() {
        makeAutoObservable(this);
    }
    //action
    convertData(clickTag) {
        if (dummyDataMapping[clickTag]) {
            this.dummyData = dummyDataMapping[clickTag];
        }
        };
    addItemData() {
        this.dummyData.itemData.data.list = [...this.dummyData.itemData.data.list, ...dummyItemSport2.data.list];
    }
}


export default StoryStore;