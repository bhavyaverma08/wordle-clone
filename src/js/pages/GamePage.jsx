import React from "react";
import WordleLetter from "../components/WordleLetter";
import WordRow from "../components/WordRow";

const GamePage = () => {
  const word = "camera";
  const wordArr = word.split("");
  return (
    <div>
      wordle
      <div>
        <WordRow wordArr={wordArr}/>
      </div>
    </div>
  );
};

export default GamePage;
