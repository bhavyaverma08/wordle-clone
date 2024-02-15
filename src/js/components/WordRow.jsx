import React from "react";
import WordleLetter from "./WordleLetter";

const WordRow = (props) => {
  const {
    word_obj,
    word_letters,
    word_status,
    ans_word,
    userWordArr,
    handleChangeLetter,
  } = props;
  return (
    <div style={{ display: "flex", margin: "0px 0px 5px 0px" }}>
      <WordleLetter
        word_letters={word_letters}
        word={ans_word}
        handleChangeLetter={handleChangeLetter}
        word_obj={word_obj}
        word_status={word_status}
      />
      <p style={{ color: "#fff" }}> {word_status}</p>
    </div>
  );
};

export default WordRow;
