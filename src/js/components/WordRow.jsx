import React from "react";
import WordleLetter from "./WordleLetter";

const WordRow = (props) => {
  const { wordArr = "random" } = props;
  return (
    <div style={{ display: "flex" }}>
      {wordArr.map((el) => {
        return <WordleLetter letter={el} />;
      })}
    </div>
  );
};

export default WordRow;
