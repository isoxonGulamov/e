import React from "react";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { ColorModeContext } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

export const Team = () => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" }, 
    // fileld bu bizda masalan mockData da malumoylar bulsa id => dedik yani bu headerName ga esa ID dedik ID yozuv chiqaradi table jadval tarzida va shuni tagigaBarcha malumotlarni id sini pastma past yozib chiqadi
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60%"}
            m="0 auto"
            p={"5px"}
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box m={"1px 20px 1px 20px"}>
      <Header title="TEAM" subtitle="Managing the Team Member" />
      <Box
        height="70vh"
        sx={{
          "& .MuiDataDrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            
          },
          "& .MuiDataDrid-cell": {
            borderBottom: "none",
          },
          "& .name-column-cell": {
           color:colors.greenAccent[300]
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
      
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
