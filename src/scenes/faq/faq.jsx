import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from "../../theme";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";

export const FAQ = () => {
  const { theme } = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"1px 20px 1px 20px"}>
      <Header title="FAQ" subtitle={"Frequently Asked Questions Page"} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
           <Typography color={colors.greenAccent[500]} variant="h5">
             An Important question
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum reprehenderit, ea consectetur minima, ad incidunt fugiat rcorrupti, perspiciatis vero saepe repellat.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
           <Typography color={colors.greenAccent[500]} variant="h5">
             Another Important question
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum reprehenderit, ea consectetur minima, ad incidunt fugiat rcorrupti, perspiciatis vero saepe repellat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
           <Typography color={colors.greenAccent[500]} variant="h5">
           Your Favourite Question
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography lineHeight={"0px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum reprehenderit, ea consectetur minima, ad incidunt fugiat rcorrupti, perspiciatis vero saepe repellat.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
           <Typography color={colors.greenAccent[500]} variant="h5">
             The Final Question
           </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorum reprehenderit, ea consectetur minima, ad incidunt fugiat rcorrupti, perspiciatis vero saepe repellat.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </Box>
  );
};
