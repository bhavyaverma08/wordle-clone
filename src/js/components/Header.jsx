import React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
const Header = (props) => {
  const { level } = props;
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <MenuRoundedIcon
        sx={{
          color: "#fff",
          padding: "10px",
          height: "30px",
          width: "30px",
          mr: "85px",
        }}
      />
      <div>
        <p style={{ color: "#fff", fontSize:"20px",fontStyle:"italic" }}>
          {" "}
          {"Wordle level : " + (Number(level) + 1)}{" "}
        </p>
      </div>

      <div style={{ marginRight: "20px" }}>
        <HelpOutlineRoundedIcon
          sx={{ color: "#fff", padding: "5px", height: "30px", width: "30px" }}
        />
        <LeaderboardOutlinedIcon
          sx={{ color: "#fff", padding: "5px", height: "30px", width: "30px" }}
        />
        <SettingsIcon
          sx={{ color: "#fff", padding: "5px", height: "30px", width: "30px" }}
        />
      </div>
    </div>
  );
};

export default Header;
