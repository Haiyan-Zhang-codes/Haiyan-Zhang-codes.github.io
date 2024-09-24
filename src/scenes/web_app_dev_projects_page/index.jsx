import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../navbar";
import ProjectsWidget from "../Widgets/ProjectsWidget";

const WebAppDevPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1100px)")
    const theme = useTheme();
 
  return (
    <Box backgroundColor={theme.palette.background.alt} height="100vh">
      <Navbar />
      {isNonMobileScreens? (
        <Box width="100%" padding="0.5rem 15%">
        <ProjectsWidget />
      </Box>
      ): (<Box width="100%" padding="0.5rem 6%" backgroundColor={theme.palette.background.alt}>
        <ProjectsWidget />
      </Box>)}
      
    </Box>
  );
};

export default WebAppDevPage;
