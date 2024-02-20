import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import WordleLetter from "../components/WordleLetter";
import WordRow from "../components/WordRow";
import { sixLetterWordsArray } from "../../assets/data/wordArray";
import ButtonContainer from "../components/ButtonContainer";
import Footer from "../components/Footer";
import LayoutTopBottom from "../layouts/LayoutTopBottom";

const initial_word_array = [
  {
    value: ["", "", "", "", "", ""],
    status: "active",
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
  const [userWordArr, setUserWordArr] = useState(initial_word_array);
  const [actualWord, setActualWord] = useState(sixLetterWordsArray[0].word);
  const otpinputref = useRef([]);
  const [showNext, setShowNext] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [level, setLevel] = useState(0);
  const [dictionaryStatus, setDictionaryStatus] = useState([
    ...sixLetterWordsArray,
  ]);

  // Defining Lodash variable
  const _ = require("lodash");

  const isWordCorrect = (user_Arr) => {
    return _.isEqual(user_Arr, actualWord.split(""));
  };

  useEffect(() => {
    const correctWord = userWordArr.findIndex((el) => el.status === "correct");
    if (correctWord > -1) {
      setShowNext(true);
      // update the dictionary here
    }
  }, [userWordArr]);

  useEffect(() => {
    updateRefForNextWord(currentWordIndex);
  }, [currentWordIndex]);

  useEffect(() => {
    setUserWordArr(initial_word_array);
    setActualWord(sixLetterWordsArray[level].word);
  }, [level]);

  const updateRefForNextWord = (currentWordIndex) => {
    if (
      currentWordIndex !== -1 &&
      otpinputref &&
      otpinputref.current &&
      otpinputref.current[currentWordIndex]
    ) {
      // If found and otpinputref is properly initialized, focus on the first input of the next pending word
      otpinputref.current[
        currentWordIndex
      ].childNodes[0].childNodes[0].childNodes[0].focus();
    }
  };

  const handlePressEnter = (word_index, currentArray, otpinputref) => {
    const copyArr = [...userWordArr];
    let updatedObject;
    let updatedArr;
    let nextObject = { value: ["", "", "", "", "", ""], status: "active" };

    if (!isWordCorrect(currentArray)) {
      updatedObject = { value: currentArray, status: "incorrect" };
    }
    if (isWordCorrect(currentArray)) {
      updatedObject = { value: currentArray, status: "correct" };
    }

    const leftItems = copyArr.slice(0, word_index);
    const rightItems = copyArr.slice(word_index + 2);

    if (word_index === 0) {
      updatedArr = [updatedObject, nextObject, ...rightItems];
    } else if (word_index === 5) {
      updatedArr = [...leftItems, updatedObject];
    } else {
      updatedArr = [...leftItems, updatedObject, nextObject, ...rightItems];
    }

    // Set the updated array
    setUserWordArr(updatedArr);

    // Find the index of the next active word
    const nextPendingWordIndex = updatedArr.findIndex(
      (word) => word.status === "active" && word.value[0] === ""
    );
    setCurrentWordIndex(nextPendingWordIndex);
  };

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

  const handleClickNext = () => {
    const updatedLevel = level + 1;
    setLevel(updatedLevel);
  };

  return (
    <LayoutTopBottom level={level}>
      <div
        style={{ width: "100vw", display: "flex", justifyContent: "center" }}
      >
        <div>
          {userWordArr.map((word_obj, index) => (
            <div
              id={index + word_obj.status}
              key={index + word_obj.status}
              ref={(el) => (otpinputref.current[index] = el)}
            >
              <WordRow
                word_obj={word_obj}
                word_letters={word_obj.value}
                word_status={word_obj.status}
                ans_word={actualWord.split("")}
                otpinputref={otpinputref}
                word_index={index}
                handlePressEnter={handlePressEnter}
                userWordArr={userWordArr}
                handleChangeLetter={handleChangeLetter}
              />
            </div>
          ))}
        </div>
      </div>
      <ButtonContainer handleClickNext={handleClickNext} showNext={showNext} />
    </LayoutTopBottom>
  );
};

export default GamePage;
