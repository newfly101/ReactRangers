import { makeAutoObservable } from "mobx";
import { dummyCardLife } from "../component/story/dummyData/StoryDummyDataLife";
import { dummyCardCulture } from "../component/story/dummyData/StoryDummyDataCulture";
import { dummyCardIt } from "../component/story/dummyData/StoryDummyDataIt";
import { dummyCardCurrent } from "../component/story/dummyData/StoryDummyDataCurrent";
import { dummyCardSport } from "../component/story/dummyData/StoryDummyDataSport";
import { dummyCardTravel } from "../component/story/dummyData/StoryDummyDataTravel";
import { dummyItemLife, dummyItemLife2 } from "../component/story/dummyData/StoryDummyDataLife";
import { dummyItemCulture, dummyItemCulture2 } from "../component/story/dummyData/StoryDummyDataCulture";
import { dummyItemIt, dummyItemIt2 } from "../component/story/dummyData/StoryDummyDataIt";
import { dummyItemCurrent, dummyItemCurrent2 } from "../component/story/dummyData/StoryDummyDataCurrent";
import { dummyItemSport, dummyItemSport2 } from "../component/story/dummyData/StoryDummyDataSport";
import { dummyItemTravel, dummyItemTravel2 } from "../component/story/dummyData/StoryDummyDataTravel";

const tagsName = [
    { tagName: "라이프", dataName: "life" },
    { tagName: "여행.맛집", dataName: "travel" },
    { tagName: "문화.연예", dataName: "culture" },
    { tagName: "IT", dataName: "it" },
    { tagName: "스포츠", dataName: "sport" },
    { tagName: "시사", dataName: "current" }
];

const dummyDataMapping = {
    life: { dataName: 'life', cardData: dummyCardLife.data.list, itemData: dummyItemLife.data.list, itemData2: dummyItemLife2.data.list },
    travel: { dataName: 'travel', cardData: dummyCardTravel.data.list, itemData: dummyItemTravel.data.list, itemData2: dummyItemTravel2.data.list },
    culture: { dataName: 'culture', cardData: dummyCardCulture.data.list, itemData: dummyItemCulture.data.list , itemData2: dummyItemCulture2.data.list},
    it: { dataName: 'it', cardData: dummyCardIt.data.list, itemData: dummyItemIt.data.list, itemData2: dummyItemIt2.data.list },
    sport: { dataName: 'sport', cardData: dummyCardSport.data.list, itemData: dummyItemSport.data.list, itemData2: dummyItemSport2.data.list },
    current: { dataName: 'current', cardData: dummyCardCurrent.data.list, itemData: dummyItemCurrent.data.list, itemData2: dummyItemCurrent2.data.list },
};


class StoryStore {
    // state
    tagsName = tagsName;
    dummyData = dummyDataMapping.life;

    constructor() {
        makeAutoObservable(this);
    }

    // action
    convertData(clickTag) {
        if (dummyDataMapping[clickTag]) {
            this.dummyData = dummyDataMapping[clickTag];
        }
    }

    addItemList() {

            this.dummyData.itemData = [...this.dummyData.itemData, ...this.dummyData.itemData2];

    }
}

export default StoryStore;
