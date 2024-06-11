import React from "react";
import Topimage from "./ComponentA/Main/Main";
import Category from "./ComponentA/Category/Category";
import Skinpage from "./ComponentA/SkinPage/SkinPage";

const TstorySkin = () => {
  const items = [
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
    {
      type: "cardWhite",
      data: {
        title: "Whatever",
        content: "나만의 이야기를 담은 블로그부터 목적을 가진 사이트까지.",
        content1: "어떤 성격의 콘텐츠든 담을 수 있습니다.",
        tag: [
          "#매거진",
          "#반응형",
          "#블로그형",
          "#사이트",
          "#초보",
          "#커버 지원",
        ],
        img: ["Whatever0.jpg", "Whatever1.jpg", "Whatever2.jpg"],
      },
    },
    {
      type: "label",
      data: {
        question: [
          "치환자가 무엇인가요?",
          "목록 스타일을 바꿀 수 있나요?",
          "첫 화면을 마음대로 편집하고 싶어요",
        ],
      },
    },
    {
      type: "cardWhite",
      data: {
        title: "Letter",
        content:
          "최소한의 디자인, 깔끔한 스킨을 원하는 블로거를 위해 만들었습니다.",
        content1: "깔끔한 편지지 위에 여러분의 이야기를 들려 주세요.",
        tag: ["#미니멀", "#반응형", "#블로그형", "#초보", "#커버 지원"],
        img: ["Letter0.jpg", "Letter1.jpg", "Letter2.jpg"],
      },
    },
    {
      type: "cardGray",
      data: {
        title: "Portfolio",
        content: "나만의 시선, 나만의 콘텐츠로 꽉 찬 공간.",
        content1: "여러분의 포트폴리오를 보여주세요.",
        tag: ["#반응형", "#사이트", "#커버 지원"],
        img: ["Portfolio0.jpg", "Portfolio1.jpg", "Portfolio2.jpg"],
      },
    },
    {
      type: "cardWhite",
      data: {
        title: "Book Club",
        content: "도서 콘텐츠를 제공하는 출판사 블로그에 추천합니다.",
        content1: "상단 프로모션 영역을 활용해 콘텐츠 주목도를 높여보세요.",
        tag: ["#반응형", "#블로그형", "#초보"],
        img: ["Book Club0.jpg", "Book Club1.jpg", "Book Club2.jpg"],
      },
    },
    {
      type: "cardGray",
      data: {
        title: "Magazine",
        content: "이 주제는 내가 전문가!",
        content1:
          "이제부터 여러분의 시선이 돋보이는 매거진을 만들 수 있습니다.",
        tag: ["#매거진", "#반응형", "#커버 지원"],
        img: ["Magazine0.jpg", "Magazine1.jpg", "Magazine2.jpg"],
      },
    },
  ];

  return (
    <>
      <Topimage />
      <Category />
      <Skinpage items={items} />
    </>
  );
};

export default TstorySkin;
