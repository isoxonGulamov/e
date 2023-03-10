import React from "react";
// bu side bar yani menu yasaymiz
import { useState } from "react";
import { Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, Button, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuModeOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import { IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MapModeOutlinedIcon from "@mui/icons-material/MapOutlined";
import User from "../../img/ninja.jpg";
import { useContext } from "react";
const Item = ({ title, to, icon, selected, setselected }) => {
  const { theme } = useContext(ColorModeContext);
  const ref = React.useRef(0);
  const colors = tokens(theme.palette.mode);
  console.log(theme);

  return (
    <>
      <Box style={{ marginTop: "10px" }}>
        <Link className="se1" style={{ color: colors.grey[100] }} to={to}>
          {title ? (
            <MenuItem active={selected == title} id="MenuItem" icon={icon}>
              <Typography ref={ref}>{title}</Typography>
            </MenuItem>
          ) : (
            <IconButton className="hover-fx">{icon}</IconButton>
          )}
        </Link>
      </Box>
    </>
  );
};

export const Sidebar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();
  const { theme } = useContext(ColorModeContext);
  const [isCollapsed, setisCollapsed] = React.useState(false);
  const [selected, setselected] = React.useState("Dashboard");
  const colors = tokens(theme.palette.mode);
  const [qiymat,setqiymat] = React.useState(false)

  return (
    <Box
      width={!isCollapsed ? "300px" : "160px"}
      backgroundColor={colors.primary[400]}
    >
      <div>
        <Menu style={{ padding: "5px 20px 5px 20px" }} iconShape="square">
          <MenuItem
            onClick={() => setisCollapsed(!isCollapsed)}
            icon={
              isCollapsed ? (
                <MenuOutlinedIcon
                  style={{ position: "absolute", left: "40%" }}
                />
              ) : undefined
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.redAccent[500],
              backgroundColor: colors.primary[400],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* User */}

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  alt="Remy Sharp"
                  src={User}
                  width="80px"
                  height="80px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center" justifyContent={"center"}>
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  G'ulomov. I
                </Typography>
                <Typography color={colors.greenAccent[400]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          {/* MENU ITEMS */}
          <Box
            height={isCollapsed ? "635px" :  "470px"}
            marginBottom="20px"
            overflow="auto"
            paddingLeft={isCollapsed ? undefined : "4%"}
          >
            <Item
              title={isCollapsed ? "" : "Dashboard"}
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Typography
              sx={{ m: "20px 0 9px 20px" }}
              color={colors.grey[300]}
              variant="h6"
            >
              Data
            </Typography>
            <Item
              title={isCollapsed ? "" : "Manage Team"}
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />

            <Item
              title={isCollapsed ? "" : "Contact"}
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title={isCollapsed ? "" : "Invoices"}
              to="/invocies"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Typography
              sx={{ m: "20px 0 9px 20px" }}
              color={colors.grey[300]}
              variant="h6"
            >
              Pages
            </Typography>
            <Item
              title={isCollapsed ? "" : "Profile"}
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title={isCollapsed ? "" : "Calendar"}
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />

            <Item
              title={isCollapsed ? "" : "FAQ"}
              to="/faq"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
          
            <Typography
              sx={{ m: "20px 0 9px 20px" }}
              color={colors.grey[300]}
              variant="h6"
            >
              Charts
            </Typography>
            <Item
              title={isCollapsed ? "" : "Bar Chart"}
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title={isCollapsed ? "" : "Pei Chart"}
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title={isCollapsed ? "" : "Line Chart"}
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title={isCollapsed ? "" : "Geography"}
              to="/geography"
              icon={<MapModeOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
          </Box>
        </Menu>
      </div>
    </Box>
  );
};
