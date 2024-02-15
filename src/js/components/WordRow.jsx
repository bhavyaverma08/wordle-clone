import React from "react";
import WordleLetter from "./WordleLetter";

const WordRow = (props) => {
  const { word_obj = {}, word,handleChangeLetter } = props;
  return (
    <div style={{ display: "flex", margin: "0px 0px 5px 0px" }}>
      {word_obj.value.map((el, index) => {
        return <WordleLetter letter={el} word={word} index={index} handleChangeLetter={handleChangeLetter} word_obj={word_obj} />;
      })}
    </div>
  );
};

export default WordRow;
