import React from "react";
import SkinPageContentCLM from "./SkinPageContentCLM";

const SkinPageKJH = (props) => {
  const { items } = props;

  return (
    <>
      <div id="티스토리 스킨">
        {items.map((item, index) => (
          <SkinPageContentCLM item={item} index={index} key={index} />
        ))}
      </div>
    </>
  );
};

export default SkinPageKJH;
