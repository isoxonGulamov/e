import { Box } from "@mui/material";
import Header from "../../components/Header";
import { LineChart } from "../../components/LineChart";


export const Line = ()=>{
  return(
    <Box m={"1px 20px 1px 20px"}>
      <Header title="Line Chart" subtitle="Simple Line Chart"/>
      <Box width="1200px" height="70vh">
           <LineChart/>
      </Box>
    </Box>
  )
}