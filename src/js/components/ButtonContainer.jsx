import React from "react";
const ButtonContainer = (props) => {
  const { showNext, handleClickNext } = props;
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {showNext && (
        <button
          onClick={handleClickNext}
          style={{ height: "40px", width: "100px", background: "" }}
        >
          <p style={{ margin: "0px" }}>Next Level</p>
        </button>
      )}
    </div>
  );
};

export default ButtonContainer;
