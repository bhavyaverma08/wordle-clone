import React, { useEffect, useState } from "react";
import OTPgenerator from "../components/OTPgenerator";
import WordleLetter from "../components/WordleLetter";
import WordRow from "../components/WordRow";

const initial_word_array = [
  {
    value: [
      { letterVal: "m", activeStatus: false },
      { letterVal: "a", activeStatus: false },
      { letterVal: "r", activeStatus: false },
      { letterVal: "k", activeStatus: false },
      { letterVal: "e", activeStatus: false },
      { letterVal: "t", activeStatus: false },
    ],
    status: "incorrect",
  },
  {
    value: [
      { letterVal: "c", activeStatus: false },
      { letterVal: "a", activeStatus: false },
      { letterVal: "m", activeStatus: false },
      { letterVal: "e", activeStatus: false },
      { letterVal: "r", activeStatus: false },
      { letterVal: "a", activeStatus: false },
    ],
    status: "correct",
  },
  {
    value: [
      { letterVal: "", activeStatus: true },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
    ],
    status: "active",
  },
  {
    value: [
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
    ],
    status: "pending",
  },
  {
    value: [
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
    ],
    status: "pending",
  },
  {
    value: [
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
      { letterVal: "", activeStatus: false },
    ],
    status: "pending",
  },
];

const GamePage = () => {
  const word = "camera";
  const word_arr = word.split("");
  const user_word_array = [
    {
      value: [
        { letterVal: "m", activeStatus: true },
        { letterVal: "a", activeStatus: false },
        { letterVal: "r", activeStatus: false },
        { letterVal: "k", activeStatus: false },
        { letterVal: "e", activeStatus: false },
        { letterVal: "t", activeStatus: false },
      ],
      status: "incorrect",
    },
    {
      value: [
        { letterVal: "c", activeStatus: false },
        { letterVal: "a", activeStatus: false },
        { letterVal: "m", activeStatus: false },
        { letterVal: "e", activeStatus: false },
        { letterVal: "r", activeStatus: false },
        { letterVal: "a", activeStatus: false },
      ],
      status: "correct",
    },
    {
      value: [
        { letterVal: "", activeStatus: true },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
      ],
      status: "active",
    },
    {
      value: [
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
      ],
      status: "pending",
    },
    {
      value: [
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
      ],
      status: "pending",
    },
    {
      value: [
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
        { letterVal: "", activeStatus: false },
      ],
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
      newArr[index] = {
        letterVal: e.target.value,
        activeStatus: false,
      };
      if (index < 5) {
        newArr[index + 1] = { letterVal: "", activeStatus: true };
      }
      const duplicateArr = [...userWordArr];
      duplicateArr[fullIndex].value = newArr;
      setUserWordArr([...duplicateArr]);
    } else return;
  };
  console.log("userWordArr", userWordArr);
  return (
    <div>
      wordle
      <div style={{width:"100vw", display:"flex", justifyContent:"center"}}>
      <div>
        {userWordArr.map((word_obj) => (
          <WordRow
            word_obj={word_obj}
            word={word_arr}
            user_word_array={userWordArr}
            handleChangeLetter={handleChangeLetter}
          />
        ))}
      </div>
      </div>
      <OTPgenerator />
    </div>
  );
};

export default GamePage;
