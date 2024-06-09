import React from "react";
import "./Story.css";

const Story = () => {
  return (
    <React.Fragment>
      <section className="story__top-section">
        <div className="story__top-section__innertext">
          <h4 className="top-section__title">Story</h4>
          <p className="top-section__message">
            티스토리의 다양한 이야기들을 만나보세요
          </p>
        </div>
        <div className="top-section__wrap-tag">
          <tag>라이프</tag>
          <tag>여행.맛집</tag>
          <tag>문화.연예</tag>
          <tag>IT</tag>
          <tag>스포츠</tag>
          <tag>시사</tag>
        </div>
      </section>
      <section className="story__mid-section">
        <div>
          <div>이미지</div>
          <div>교육 공감 233 응원 9</div>
          <p>발전을 위한 마음가짐</p>
          <p>청랑</p>
          <p>by JadeWolveS</p>
        </div>
        <div></div>
        <div></div>
      </section>
      <section className="story__bottom-section"></section>
    </React.Fragment>
  );
};

export default Story;
