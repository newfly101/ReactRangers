import React, { useState } from "react";
import Topimage from "./ComponentA/Main/Main";
import Category from "./ComponentA/Category/Category";
import Skinpage from "./ComponentA/SkinPage/SkinPage";
import UserSkin from "./ComponentA/SkinPage/UserSkin";
import classes from "./TstorySkin.module.css";
import items from "./DummyData/Item.json";
import usersSkin from "./DummyData/userSkin.json";
import SkinPageKJH from "./ComponentA/SkinPage/skinpageTest/SkinPageKJH";
import SkinPageCLM from "./ComponentA/SkinPage/skinpageTest/SkinPageCLM";

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
