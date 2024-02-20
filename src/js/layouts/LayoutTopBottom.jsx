import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import theme from "../theme/theme";
const LayoutTopBottom = (props) => {
  const { level, children } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100vh"
      }}
    >
      <Header level={level} />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutTopBottom;
