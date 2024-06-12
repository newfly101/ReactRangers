import React, { useState } from "react";
import Topimage from "./ComponentA/Main/Main";
import Category from "./ComponentA/Category/Category";
import Skinpage from "./ComponentA/SkinPage/SkinPage";
import UserSkin from "./ComponentA/SkinPage/UserSkin";
import classes from "./TstorySkin.module.css";
import items from "./DummyData/Item.json";
import usersSkin from "./DummyData/userSkin.json";

const TstorySkin = () => {
  const [isAVew, setIsAVew] = useState(true);

  const handleCategoryButton = (isA) => {
    setIsAVew(isA);
  };

  return (
    <>
      <div className={classes.main}>
        <Topimage />
        <Category handleCategoryButton={handleCategoryButton} />
        {isAVew ? (
          <Skinpage items={items} />
        ) : (
          <UserSkin usersSkin={usersSkin} />
        )}
      </div>
    </>
  );
};

export default TstorySkin;
