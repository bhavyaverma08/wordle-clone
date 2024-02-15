import React from "react";
import theme from "../theme/theme";
import "./wordLetter.scss";

const colorMapping = {
  incorrect_letter: theme.palette.primary.main,
  present_letter: theme.palette.primary[200],
  correct_letter: theme.palette.primary[100],
  empty_letter: theme.palette.secondary[100],
};

const WordleLetter = (props) => {
  const {
    letter = { letterVal: "", activeStatus: false },
    word,
    index,
    user_word_array,
    handleChangeLetter,
    word_obj,
  } = props;

  const getStatus = () => {
    const letter_position = word.findIndex((el) => el === letter.letterVal);
    if (word_obj.status === "active") {
      return "empty_letter";
    } else if (word[index] === letter.letterVal) {
      return "correct_letter";
    } else if (letter_position > -1) {
      return "present_letter";
    } else if (letter.letterVal) {
      return "incorrect_letter";
    } else {
      return "empty_letter";
    }
  };
  console.log("letter", letter);
  return (
    <>
      <input
        autoFocus={letter.activeStatus}
        disabled={letter.letterVal !== ""}
        style={{
          width: "52px",
          height: "52px",
          background: colorMapping[getStatus()],
          border:
            getStatus() === "empty_letter"
              ? `2px solid ${theme.palette.primary.main}`
              : `2px solid transparent`,
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px 5px 0px 0px",
          fontSize: "24px",
        }}
        onChange={(e) => handleChangeLetter(e, index)}
        type="text"
        value={letter.letterVal.toUpperCase()}
      ></input>
    </>
  );
};

export default WordleLetter;
