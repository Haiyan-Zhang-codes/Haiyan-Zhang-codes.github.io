import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../navbar";
import FlexBetween from "../../components/FlexBetween";
import PersonalWidget from "../Widgets/PersonalWidget";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;

  const { t } = useTranslation();
  const aboutMePageContent = t("about_me_page", { returnObjects: true });

  const isNonMobileScreens = useMediaQuery("(min-width: 1100px)")

  return (
    <Box>
      <Navbar />

      {aboutMePageContent.map((content, index) => (
        isNonMobileScreens? (
<FlexBetween
          backgroundColor={alt}
          padding="2rem 15%"
          flexDirection="column"
          key={index}
        >
          {index % 2 === 0 ? (
            <Box display="flex">
              <Box
                width="70%"
                alignSelf="flex-start"
                height="auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <PersonalWidget
                  title={content.title}
                  image={content.image}
                  description={content.description}
                />
              </Box>
              <Typography
                color={theme.palette.primary.main}
                fontWeight="bold"
                fontSize="3rem"
                alignSelf="center"
                margin="auto"
              >
                {content.time}
              </Typography>
            </Box>
          ) : (
            <Box display="flex">
              <Typography
                color={theme.palette.primary.main}
                fontWeight="bold"
                fontSize="3rem"
                alignSelf="center"
                margin="auto"
              >
                {content.time}
              </Typography>
              <Box
                width="70%"
                alignSelf="flex-end"
                height="auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <PersonalWidget
                  title={content.title}
                  image={content.image}
                  description={content.description}
                />
              </Box>
            </Box>
          )}
        </FlexBetween>
        ):(
            <FlexBetween flexDirection="column" padding="2rem 6%">
              <Box
                width="100%"
                alignSelf="center"
                height="auto"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <PersonalWidget
                  title={content.title}
                  image={content.image}
                  description={content.description}
                />
              </Box>
              <Typography
                color={theme.palette.primary.main}
                fontWeight="bold"
                fontSize="3rem"
                alignSelf="center"
                paddingTop="1rem"
              >
                {content.time}
              </Typography>
   
            </FlexBetween>
        )
        
      ))}
    </Box>
  );
};

export default AboutPage;
