import React from "react";
import theme from "../theme/theme";

const colorMapping = {
  incorrect_letter: theme.palette.primary.main,
  present_letter: theme.palette.primary[200],
  correct_letter: theme.palette.primary[100],
  empty_letter: theme.palette.secondary[100],
};

const WordleLetter = (props) => {
  const { letter = "a", word, index } = props;

  const getStatus = () => {
    const letter_position = word.findIndex((el) => el === letter);
    if (word[index] === letter) {
      return "correct_letter";
    } else if (letter_position > -1) {
      return "present_letter";
    } else if (letter) {
      return "incorrect_letter";
    } else {
      return "empty_letter";
    }
  };
  return (
    <div
      style={{
        width: "52px",
        height: "52px",
        background: colorMapping[getStatus()],
        border: getStatus() === "empty_letter" ? `1px solid ${theme.palette.primary.main}` : `1px solid transparent`,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 5px 0px 0px",
      }}
    >
      <p style={{ fontSize: "24px" }}> {letter.toUpperCase()}</p>
    </div>
  );
};

export default WordleLetter;
