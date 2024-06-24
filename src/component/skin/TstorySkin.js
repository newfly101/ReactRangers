import React, { useState } from "react";
import TopImage from "./Component/skinMain/Main";
import Category from "./Component/category/Category";
import SkinPage from "./Component/skinPage/SkinPage";
import UserSkin from "./Component/skinPage/UserSkin";
import classes from "./TstorySkin.module.css";
import items from "./dummyData/Item.json";
import usersSkin from "./dummyData/userSkin.json";
import CreateSkin from "./Component/skinPage/CreateSkin";

const TstorySkin = () => {
  const [isAVew, setIsAVew] = useState(0);

  const handleCategoryButton = (isA) => {
    setIsAVew(isA);
  };

  return (
    <>
      <div className={classes.main}>
        <TopImage />
        {isAVew !== 4 && <Category handleCategoryButton={handleCategoryButton} />}
        {isAVew === 0 && <SkinPage items={items} />}
        {isAVew === 1 && <UserSkin usersSkin={usersSkin} />}
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
