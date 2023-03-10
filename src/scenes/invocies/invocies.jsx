import React from "react";
import { Box,Typography} from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { ColorModeContext } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

export const Invocies = () => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", }, 
    // fileld bu bizda masalan mockData da malumoylar bulsa id => dedik yani bu headerName ga esa ID dedik ID yozuv chiqaradi table jadval tarzida va shuni tagigaBarcha malumotlarni id sini pastma past yozib chiqadi
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },

    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
  
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell:(params)=>(
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      )
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },

  ];
  return (
    <Box m={"1px 20px 1px 20px"}>
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
            color:"red"
            
          },
          "& .MuiCheckbox-root":{
            color:`${colors.greenAccent[200]} !important`
          }
      
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}  />
      </Box>
    </Box>
  );
};
