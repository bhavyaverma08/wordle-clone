import React from "react";
import theme from "../theme/theme";
const Footer = (props) => {
  const { level } = props;
  return (
    <div
      style={{
        height: "20px",
        display: "flex",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.secondary.main,
        background: theme.palette.primary.main,
      }}
    >
      <p style={{ margin: "0px", fontSize: "12px" }}>
        Developed by Bhavya Verma
      </p>
    </div>
  );
};

export default Footer;
