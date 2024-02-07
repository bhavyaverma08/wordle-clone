import React from "react";
import theme from "../theme/theme";

const colorMapping = {
  incorrect_letter: theme.palette.primary.main,
  present_letter: theme.palette.primary[200],
  correct_letter: theme.palette.primary[100],
};

const WordleLetter = (props) => {
  const { letter = "A", bgcolor = "incorrect_letter" } = props;
  return (
    <div
      style={{
        width: "50px",
        height: "60px",
        background: colorMapping[bgcolor],
        color: "#fff",
        fontWeight:"bold",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px 2px 0px 0px",
      }}
    >
      <p style={{ fontSize: "24px" }}> {letter.toUpperCase()}</p>
    </div>
  );
};

export default WordleLetter;
