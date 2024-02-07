import React from "react";
import WordleLetter from "../components/WordleLetter";
import WordRow from "../components/WordRow";

const GamePage = () => {
  const word = "camera";
  const word_arr = word.split("");
  const user_word_array = [
    { value: ["m", "a", "r", "k", "e", "t"], status: "incorrect" },
    { value: ["c", "a", "m", "e", "r", "a"], status: "correct" },
    { value: ["", "", "", "", "", ""], status: "pending" },
    { value: ["", "", "", "", "", ""], status: "pending" },
    { value: ["", "", "", "", "", ""], status: "pending" },
    { value: ["", "", "", "", "", ""], status: "pending" },
  ];
  return (
    <div>
      wordle
      <div>
        {user_word_array.map((word_obj) => (
          <WordRow word_obj={word_obj} word={word_arr} />
        ))}
      </div>
    </div>
  );
};

export default GamePage;
