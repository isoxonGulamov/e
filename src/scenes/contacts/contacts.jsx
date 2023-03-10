import React from "react";
import { Box,} from "@mui/material";
import { GridToolbar } from "@mui/x-data-grid";
import { useContext } from "react";
import { tokens } from "../../theme";
import { DataGrid } from "@mui/x-data-grid";
import { ColorModeContext } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

export const Contacts = () => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID",flex:0.5 }, 
    // fileld bu bizda masalan mockData da malumoylar bulsa id => dedik yani bu headerName ga esa ID dedik ID yozuv chiqaradi table jadval tarzida va shuni tagigaBarcha malumotlarni id sini pastma past yozib chiqadi
    {field:"registrarId",headerName:"Registrar ID"},
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
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
  
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
  
  ];
  return (
    <Box m={"1px 20px 1px 20px"}>
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
      
            color:`${colors.grey[100]} !important`
            
            
          },
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} components={{Toolbar:GridToolbar}} />
      </Box>
    </Box>
  );
};
