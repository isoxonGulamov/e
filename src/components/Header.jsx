import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ColorModeContext } from "../theme";
import { useContext } from "react";
const Header = ({ title, subtitle }) => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  console.log(theme);
  return (
    <Box mb={"10px"}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ mb: "1px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
