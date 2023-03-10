import { Box } from "@mui/material";
import Header from "../../components/Header";
import { BarChart } from "../../components/BarChart";


export const Bar = ()=>{
  return(
    <Box m={"1px 20px 1px 20px"}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart"/>
      <Box width="1200px" height="70vh">
           <BarChart/>
      </Box>
    </Box>
  )
}