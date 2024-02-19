import React, { useEffect, useRef, useState } from "react";
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
    word_letters,
    ans_word,
    handleChangeLetter,
    word_obj,
    word_status,
    userWordArr,
    word_index,
    handlePressEnter,
    otpinputref,
  } = props;
  let [wordFields, setwordFields] = useState(word_letters);
  let inputRefs = useRef([]);

  useEffect(() => {
    // Apply flip-card class with staggered delay
    inputRefs.current.forEach((inputRef, index) => {
      const timer = setTimeout(() => {
        if (word_status === "incorrect") {
          inputRef.classList.add("flip-card-X");
        }
        if (word_status === "correct") {
          inputRef.classList.add("flip-card-Y");
        }
      }, 100 * index); // Multiply delay by index
      return () => clearTimeout(timer); // Clear timeout on component unmount
    });
  }, [word_status]);

  const handleOtp = (e, index) => {
    const numericValue = e.target.value.replace(/D/g, "");
    const singleDigitValue = numericValue.slice(0, 1);
    let copywordFields = [...wordFields];
    copywordFields[index] = singleDigitValue;
    if (index < wordFields.length - 1 && singleDigitValue) {
      inputRefs.current[index + 1].focus();
    }
    setwordFields(copywordFields);
  };

  const getStatus = (input_letter, index) => {
    const letter_position = ans_word.findIndex((el) => el === input_letter);
    if (word_status === "pending" || word_status === "active") {
      return "empty_letter";
    } else if (ans_word[index] === input_letter) {
      return "correct_letter";
    } else if (letter_position > -1) {
      return "present_letter";
    } else if (input_letter) {
      return "incorrect_letter";
    } else {
      return "empty_letter";
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" && index === 5 && wordFields[index] !== "") {
      handlePressEnter(word_index, wordFields, otpinputref);
      return;
    }
    if (e.key === "Backspace") {
      e.preventDefault();
      let copyotpfields = [...wordFields];
      copyotpfields[index] = "";
      setwordFields(copyotpfields);
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    } else if (e.key === "ArrowRight" && index < wordFields.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const isInputDisabled = () => {
    if (word_status !== "active") return true;
    else return false;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        margin: "auto",
      }}
    >
      {wordFields.map((_, index) => {
        return (
          <input
            id={index + word_status}
            key={index + word_status}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={isInputDisabled()}
            ref={(el) => (inputRefs.current[index] = el)}
            onChange={(e) => handleOtp(e, index)}
            value={wordFields[index]}
            className=""
            type="text"
            style={{
              width: "52px",
              height: "52px",
              background: colorMapping[getStatus(wordFields[index], index)],
              border:
                getStatus(wordFields[index], index) === "empty_letter"
                  ? `2px solid ${theme.palette.primary.main}`
                  : `2px solid transparent`,
              color: "#fff",
              fontWeight: "bolder",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0px 5px 0px 0px",
              fontSize: "24px",
              fontFamily: "monospace",
              textTransform: "capitalize",
            }}
          />
        );
      })}
    </div>
  );
};

export default WordleLetter;
