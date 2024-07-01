import React, { useState } from "react";
import TopImage from "./TopImage";
import SkinCategory from "./SkinCategory";
import SkinPage from "./SkinPage";
import UserSkin from "./SkinPageUser";
import classes from "../../css/skin/SkinMain.module.css";
import items from "../../dummyData/skin/Item.json";
import usersSkin from "../../dummyData/skin/userSkin.json";
import CreateSkin from "./CreateSkin";

const SkinMain = () => {
  const [isAVew, setIsAVew] = useState(0);

  const handleCategoryButton = (isA) => {
    setIsAVew(isA);
  };

  return (
    <>
      <div className={classes.main}>
        <TopImage />
        {isAVew !== 4 && <SkinCategory handleCategoryButton={handleCategoryButton} />}
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

export default SkinMain;
