import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";
import ProjectsWidget from "../Widgets/ProjectsWidget";

const WebAppDevPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1100px)")
 
  return (
    <Box>
      <Navbar />
      {isNonMobileScreens? (
        <Box width="100%" padding="0.5rem 15%">
        <ProjectsWidget />
      </Box>
      ): (<Box width="100%" padding="0.5rem 6%">
        <ProjectsWidget />
      </Box>)}
      
    </Box>
  );
};

export default WebAppDevPage;
