import { Box, Typography } from "@mui/material";
import { ColorModeContext } from "../theme";
import { useContext } from "react";
import { tokens } from "../theme";
import { ProgressCircle } from "./Progress";

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
             
        <Box>
           <ProgressCircle progress={progress}/>
        </Box>
        </Box>
        
        <Box display="flex" justifyContent="space-between">
        <Typography
            variant="h5"
            sx={{ color: colors.greenAccent[400] }}
          >
            {subtitle}
          </Typography>

          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.blueAccent[300] }}
          >
           {increase}
          </Typography>
        </Box>

    </Box>
  );
};
