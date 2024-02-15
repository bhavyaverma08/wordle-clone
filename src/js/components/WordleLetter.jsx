import React, { useRef, useState } from "react";
import theme from "../theme/theme";
import "./wordLetter.scss";

const colorMapping = {
  incorrect_letter: theme.palette.primary.main,
  present_letter: theme.palette.primary[200],
  correct_letter: theme.palette.primary[100],
  empty_letter: theme.palette.secondary[100],
};

const WordleLetter = (props) => {
  const { word_letters, word, handleChangeLetter, word_obj, word_status } =
    props;
  let [otpfields, setOtpFields] = useState(word_letters);
  let otpinputref = useRef([]);

  console.log("word_status", word_status);

  const handleOtp = (e, index) => {
    const numericValue = e.target.value.replace(/D/g, "");
    const singleDigitValue = numericValue.slice(0, 1);
    let copyotpfields = [...otpfields];
    copyotpfields[index] = singleDigitValue;
    if (index < otpfields.length - 1 && singleDigitValue) {
      otpinputref.current[index + 1].focus();
    }
    setOtpFields(copyotpfields);
  };

  const getStatus = (input_letter, index) => {
    const letter_position = word_letters.findIndex((el) => el === input_letter);
    if (word_status === "pending") {
      return "empty_letter";
    } else if (word_letters[index] === input_letter) {
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
    if (e.key === "Enter" && index === 5 && otpfields[index] !== "") {
      alert("message");
      return;
    }
    if (e.key === "Backspace") {
      e.preventDefault();
      let copyotpfields = [...otpfields];
      copyotpfields[index] = "";
      setOtpFields(copyotpfields);
      if (index > 0) {
        otpinputref.current[index - 1].focus();
      }
    } else if (e.key === "ArrowRight" && index < otpfields.length - 1) {
      otpinputref.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpinputref.current[index - 1].focus();
    }
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
      {otpfields.map((_, index) => {
        return (
          <input
            key={index}
            onKeyDown={(e) => handleKeyDown(e, index)}
            // disabled={word_status !== "pending"}
            ref={(el) => (otpinputref.current[index] = el)}
            onChange={(e) => handleOtp(e, index)}
            value={otpfields[index]}
            type="text"
            style={{
              width: "52px",
              height: "52px",
              background: colorMapping[getStatus(otpfields[index], index)],
              border:
                getStatus(otpfields[index], index) === "empty_letter"
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
