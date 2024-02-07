import React from "react";
import WordleLetter from "./WordleLetter";

const WordRow = (props) => {
  const { word_obj = {}, word } = props;
  return (
    <div style={{ display: "flex", margin: "0px 0px 5px 0px" }}>
      {word_obj.value.map((el,index) => {
        return (
          <WordleLetter letter={el} word={word} index={index} />
        );
      })}
    </div>
  );
};

export default WordRow;
