import { Box } from "@mui/material";
import Header from "../../components/Header";
import { GeoChart } from "../../components/GeoChart";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import { tokens } from "../../theme";

export const Geo = ()=>{
  const {theme} = useContext(ColorModeContext)
  const colors = tokens(theme.palette.node)
  return(
    <Box m={"1px 20px 1px 20px"}>
      <Header title="Geography Chart" subtitle="Simple Geography Chart"/>
      <Box width="1200px" height="70vh" border={`3px solid ${colors.grey[400]}`} borderRadius={"4px"}>
           <GeoChart/>
      </Box>
    </Box>
  )
}