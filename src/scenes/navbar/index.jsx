import React, { useContext } from "react";
import { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import {
  DarkMode,
  LightMode,
  Menu,
  Close,
  Language,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { ModeContext } from "../../ModeContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const isNonMobileScreens = useMediaQuery("(min-width: 1100px)");

  const theme = useTheme();
  const dark = theme.palette.dark;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const { toggleMode } = useContext(ModeContext);

  const activeTabStyle = {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.primary.dark,
    fontWeight: "bold",
  };

  const normalTabStyle = {
    color:
      theme.palette.mode === "dark"
        ? theme.palette.primary.dark
        : theme.palette.primary.main,
  };

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === "en" ? "fr" : "en";

    const hash = window.location.hash.replace(/#\/(en|fr)/, "");
    const pathname = window.location.pathname.replace(/\/(en|fr)/, "");
    const pathWithoutLang = hash || pathname;

    navigate(`/${newLang}${pathWithoutLang}`);

    i18n.changeLanguage(newLang);
  };

  return (
    <FlexBetween
      padding="1rem 6%"
      backgroundColor={alt}
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <FlexBetween>
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/en/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          {t("app_name")}
        </Typography>
      </FlexBetween>
      {isNonMobileScreens ? (
        <FlexBetween gap="1.7rem">
          <Typography
            color="primary"
            fontSize="1.2rem"
            onClick={() => navigate("/en/web-app-dev-projects")}
            sx={{
              ...(location.pathname === "/en/web-app-dev-projects"
                ? activeTabStyle
                : normalTabStyle),
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            {t("web_app")}
          </Typography>
          <Typography
            color="primary"
            fontSize="1.2rem"
            onClick={() => navigate("/en/data-analytics-projects")}
            sx={{
              ...(location.pathname === "/en/data-analytics-projects"
                ? activeTabStyle
                : normalTabStyle),
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            {t("data_analytics")}
          </Typography>
          <Typography
            color="primary"
            fontSize="1.2rem"
            onClick={() => navigate("/en/about-me")}
            sx={{
              ...(location.pathname === "/en/about-me"
                ? activeTabStyle
                : normalTabStyle),
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            {t("about_me")}
          </Typography>
          <Typography
            color="primary"
            fontSize="1.2rem"
            onClick={() => navigate("/en/contact-me")}
            sx={{
              ...(location.pathname === "/en/contact-me"
                ? activeTabStyle
                : normalTabStyle),
              "&:hover": {
                color: primaryLight,
                cursor: "pointer",
              },
            }}
          >
            {t("contact_me")}
          </Typography>
        </FlexBetween>
      ) : (
        <Menu
          color="primary"
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        />
      )}
      {isMobileMenuToggled && !isNonMobileScreens && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          top="3.5rem"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
        >
          <Box
            display="flex"
            alignItems="flex-end"
            p="1rem"
            flexDirection="column"
            gap="2rem"
          >
            <Close
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            />

            <Typography
              color="primary"
              fontSize="1.2rem"
              onClick={() => navigate("/en/web-app-dev-projects")}
              sx={{
                ...(location.pathname === "/en/web-app-dev-projects"
                  ? activeTabStyle
                  : normalTabStyle),
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              {t("web_app")}
            </Typography>
            <Typography
              color="primary"
              fontSize="1.2rem"
              onClick={() => navigate("/en/data-analytics-projects")}
              sx={{
                ...(location.pathname === "/en/data-analytics-projects"
                  ? activeTabStyle
                  : normalTabStyle),
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              {t("data_analytics")}
            </Typography>
            <Typography
              color="primary"
              fontSize="1.2rem"
              onClick={() => navigate("/en/about-me")}
              sx={{
                ...(location.pathname === "/en/about-me"
                  ? activeTabStyle
                  : normalTabStyle),
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              {t("about_me")}
            </Typography>
            <Typography
              color="primary"
              fontSize="1.2rem"
              onClick={() => navigate("/en/contact-me")}
              sx={{
                ...(location.pathname === "/en/contact-me"
                  ? activeTabStyle
                  : normalTabStyle),
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              {t("contact_me")}
            </Typography>
          </Box>
        </Box>
      )}
      <FlexBetween gap="0.5rem">
        <Language color="primary" onClick={toggleLanguage} />
        <Typography color="primary">
          {i18n.language === "en" ? "EN" : "FR"}
        </Typography>
        <Typography onClick={toggleMode} color="primary" paddingLeft="1rem">
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px " }} />
          )}
        </Typography>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
