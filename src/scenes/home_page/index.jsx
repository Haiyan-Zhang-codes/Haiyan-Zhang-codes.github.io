
import { Box } from "@mui/material";
import Navbar from "../navbar";
import { useTranslation } from "react-i18next";


const HomePage = () => {
    const { t } = useTranslation();
    
    return(
        <Box>
            <Navbar />
        </Box>

        
    )
};

export default HomePage;