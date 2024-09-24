import { Box, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../navbar";
import DataProjectsWidget from "../Widgets/DataProjectsWidget";


const DataAnalyticsPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1100px)")
    const theme = useTheme()
 
  return (
    <Box backgroundColor={theme.palette.background.alt} height="100vh">
      <Navbar />
      {isNonMobileScreens? (
        <Box width="100%" padding="0.5rem 15%">
        <DataProjectsWidget />
      </Box>
      ): (<Box width="100%" padding="0.5rem 6%" backgroundColor={theme.palette.background.alt}>
        <DataProjectsWidget />
      </Box>)}
      
    </Box>
  );
};

export default DataAnalyticsPage;