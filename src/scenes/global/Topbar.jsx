import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from '@mui/material/Tooltip';
import InputBase from "@mui/material/InputBase";

// bu dashboard tepasini yasaymiz
export const Topbar = () => {
  const { colorMode, theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  return (
    <Box style={{ display: "flex",lineHeight:"0px"}} justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={colors.grey[800]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton className={theme.palette.mode === "dark" ? "IconTop" : "IconTop2"} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
           <Tooltip title="Dark">
       
             <DarkModeOutlinedIcon  />

           </Tooltip>
          ) : (
           <Tooltip title="Light">
              
               <LightModeOutlinedIcon />
           </Tooltip>
          )}
        </IconButton>

       <Tooltip title="Notification">
       <IconButton className={theme.palette.mode === "dark" ? "IconTop" : "IconTop2"}>
          {/* 2 */}
          <NotificationsOutlinedIcon   />
        </IconButton>
       </Tooltip>
        <Tooltip title="Settings">
        <IconButton className={theme.palette.mode === "dark" ? "IconTop" : "IconTop2"}>
          {/* 3 */}
          <SettingsOutlinedIcon />
        </IconButton>
        </Tooltip>
      <Tooltip title="Profile">
      <IconButton className={theme.palette.mode === "dark" ? "IconTop" : "IconTop2"}>
          {/* 4 */}
          <PersonOutlinedIcon  />
        </IconButton>
      </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;
