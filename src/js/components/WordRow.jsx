import React, { useRef } from "react";
import WordleLetter from "./WordleLetter";

const WordRow = (props) => {
  const {
    word_obj,
    word_letters,
    word_status,
    ans_word,
    userWordArr,
    handleChangeLetter,
    word_index,
    handlePressEnter,
    otpinputref,
  } = props;

  return (
    <div style={{ display: "flex", margin: "0px 0px 5px 0px" }}>
      <WordleLetter
        word_letters={word_letters}
        userWordArr={userWordArr}
        word_index={word_index}
        ans_word={ans_word}
        handleChangeLetter={handleChangeLetter}
        word_obj={word_obj}
        word_status={word_status}
        handlePressEnter={handlePressEnter}
        otpinputref={otpinputref}
      />
    </div>
  );
};

export default WordRow;
