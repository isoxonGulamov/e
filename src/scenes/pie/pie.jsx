import { Box } from "@mui/material";
import Header from "../../components/Header";
import { PieChart } from "../../components/PieChart";


export const Pie = ()=>{
  return(
    <Box m={"1px 20px 1px 20px"}>
      <Header title="Pie Chart" subtitle="Simple Pie Chart"/>
      <Box width="1200px" height="70vh">
           <PieChart/>
      </Box>
    </Box>
  )
}