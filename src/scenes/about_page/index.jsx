import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Navbar from "../navbar";
import FlexBetween from "../../components/FlexBetween";
import PersonalWidget from "../Widgets/PersonalWidget";
import { useTranslation } from "react-i18next";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const AboutPage = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;

  const { t } = useTranslation();
  const aboutMePageContent = t("about_me_page", { returnObjects: true });

  const isNonMobileScreens = useMediaQuery("(min-width: 1100px)");

  return (
    <Box>
      <Navbar />

      {aboutMePageContent.map((content, index) =>
        isNonMobileScreens ? (
          <FlexBetween
            backgroundColor={alt}
            padding="2rem 10%"
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
                <Box marginLeft="2rem" alignContent="center">
                  <Typography
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize="2.5rem"
                  >
                    {content.slogan.main}
                  </Typography>
                  <Box
                    display="flex"
                    color={theme.palette.primary.main}
                    gap="0.5rem"
                    alignItems="center"
                  >
                    <KeyboardDoubleArrowRightIcon />
                    <Typography fontWeight="bold" fontSize="1.5rem">
                      {content.slogan.sub}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box display="flex">
                <Box marginRight="2rem" alignContent="center">
                  <Typography
                    color={theme.palette.primary.main}
                    fontWeight="bold"
                    fontSize="2.5rem"
                  >
                    {content.slogan.main}
                  </Typography>
                  <Box
                    display="flex"
                    color={theme.palette.primary.main}
                    gap="0.5rem"
                    alignItems="center"
                  >
                    <KeyboardDoubleArrowRightIcon />
                    <Typography fontWeight="bold" fontSize="1.5rem">
                      {content.slogan.sub}
                    </Typography>
                  </Box>
                </Box>
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
        ) : (
          <FlexBetween flexDirection="column" padding="2rem 6%">
            <Box alignContent="center">
              <Typography
                color={theme.palette.primary.main}
                fontWeight="bold"
                fontSize="2rem"
                textAlign="center"
              >
                {content.slogan.main}
              </Typography>
              <Box
                display="flex"
                color={theme.palette.primary.main}
                gap="0.5rem"
                alignItems="center"
              >
                <KeyboardDoubleArrowRightIcon />
                <Typography fontWeight="bold" fontSize="1.5rem">
                  {content.slogan.sub}
                </Typography>
              </Box>
            </Box>
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
            
          </FlexBetween>
        )
      )}
    </Box>
  );
};

export default AboutPage;
