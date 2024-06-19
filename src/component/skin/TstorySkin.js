import React, { useState } from "react";
import Topimage from "./ComponentA/skinMain/Main";
import Category from "./ComponentA/category/Category";
import Skinpage from "./ComponentA/skinPage/SkinPage";
import UserSkin from "./ComponentA/skinPage/UserSkin";
import classes from "./TstorySkin.module.css";
import items from "./dummyData/Item.json";
import usersSkin from "./dummyData/userSkin.json";
import SkinPageKJH from "./ComponentA/skinPage/skinpageTest/SkinPageKJH";
import SkinPageCLM from "./ComponentA/skinPage/skinpageTest/SkinPageCLM";

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
