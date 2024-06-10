import React, { useState } from "react";
import Topimage from "./ComponentA/Main/Main";
import Category from "./ComponentA/Category/Category";
import Skinpage from "./ComponentA/SkinPage/SkinPage";

const TstorySkin = () => {
  const [items, setItems] = useState([
    {
      type: "cardWhite",
      data: {
        title: "Odyssey",
        content: "글과 사진, 그리고 영상을 담아",
        content1: "당신의 블로그 여행에 함께합니다.",
        tag: ["#반응형", "#블로그형", "#커버 지원"],
        img: ["Odyssey0.jpg", "Odyssey1.jpg", "Odyssey2.jpg"],
      },
    },
    {
      type: "cardGray",
      data: {
        title: "Poster",
        content: "블로그 홈을 처음 접하는 초심자에게 추천합니다.",
        content1: "단정한 첫인상을 블로그에 입혀 보세요.",
        tag: ["#반응형", "#블로그형", "#초보", "#커버 지원"],
        img: ["Poster0.jpg", "Poster1.jpg", "Poster2.jpg"],
      },
    },
  ]);
  return (
    <>
      <Topimage />
      <Category />
      <Skinpage items={items} />
    </>
  );
};

export default TstorySkin;
