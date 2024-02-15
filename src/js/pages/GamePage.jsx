import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import WordleLetter from "../components/WordleLetter";
import WordRow from "../components/WordRow";

const initial_word_array = [
  {
    value: ["", "", "", "", "", ""],
    status: "pending",
  },
  {
    value: ["", "", "", "", "", ""],
    status: "pending",
  },
  {
    value: ["", "", "", "", "", ""],
    status: "pending",
  },
  {
    value: ["", "", "", "", "", ""],
    status: "pending",
  },
  {
    value: ["", "", "", "", "", ""],
    status: "pending",
  },
  {
    value: ["", "", "", "", "", ""],
    status: "pending",
  },
];

const GamePage = () => {
  const word = "camera";
  const word_arr = word.split("");
  const user_word_array = [
    {
      value: ["m", "a", "r", "k", "e", "t"],
      status: "incorrect",
    },
    {
      value: ["c", "a", "m", "e", "r", "a"],
      status: "correct",
    },
    {
      value: ["", "", "", "", "", ""],
      status: "pending",
    },
    {
      value: ["", "", "", "", "", ""],
      status: "pending",
    },
    {
      value: ["", "", "", "", "", ""],
      status: "pending",
    },
    {
      value: ["", "", "", "", "", ""],
      status: "pending",
    },
  ];
  const [userWordArr, setUserWordArr] = useState(initial_word_array);
  useEffect(() => {
    setUserWordArr(user_word_array);
  }, []);

  function isValidAlphabet(letter) {
    // Regular expression to match only a single alphabetic character
    var regex = /^[a-zA-Z]$/;

    // Test if the input matches the regular expression
    return regex.test(letter) || letter === "";
  }

  const handleChangeLetter = (e, index) => {
    if (isValidAlphabet(e.target.value)) {
      const fullArr = userWordArr.find((el) => el.status === "active");
      const fullIndex = userWordArr.findIndex((el) => el.status === "active");
      const newArr = fullArr.value;
      newArr[index] = e.target.value;
      const duplicateArr = [...userWordArr];
      duplicateArr[fullIndex].value = newArr;
      setUserWordArr([...duplicateArr]);
    } else return;
  };

  console.log("userWordArr", userWordArr);

  return (
    <div>
      <Header />
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <div>
          {userWordArr.map((word_obj) => (
            <WordRow
              word_obj={word_obj}
              word_letters={word_obj.value}
              word_status={word_obj.status}
              ans_word={word_arr}
              userWordArr={userWordArr}
              handleChangeLetter={handleChangeLetter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;
