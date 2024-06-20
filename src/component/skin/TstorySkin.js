import React, { useState } from "react";
import Topimage from "./Component/skinMain/Main";
import Category from "./Component/category/Category";
import Skinpage from "./Component/skinPage/SkinPage";
import UserSkin from "./Component/skinPage/UserSkin";
import classes from "./TstorySkin.module.css";
import items from "./dummyData/Item.json";
import usersSkin from "./dummyData/userSkin.json";
import SkinPageKJH from "./Component/skinPage/skinpageTest/SkinPageKJH";
import SkinPageCLM from "./Component/skinPage/skinpageTest/SkinPageCLM";
import CreateSkin from "./Component/skinPage/CreateSkin";

const TstorySkin = () => {
  const [isAVew, setIsAVew] = useState(0);

  const handleCategoryButton = (isA) => {
    setIsAVew(isA);
  };

  return (
    <>
      <div className={classes.main}>
        <Topimage />
        <Category handleCategoryButton={handleCategoryButton} />
        {isAVew === 0 && <Skinpage items={items} />}
        {isAVew === 1 && <UserSkin usersSkin={usersSkin} />}
        {isAVew === 2 && <SkinPageKJH items={items} />}
        {isAVew === 3 && <SkinPageCLM items={items} />}
        {isAVew === 4 && <CreateSkin />}

        {/*{isAVew  ? (*/}
        {/*  <Skinpage items={items} />*/}
        {/*) : (*/}
        {/*  <UserSkin usersSkin={usersSkin} />*/}
        {/*)}*/}
      </div>
    </>
  );
};

export default TstorySkin;
