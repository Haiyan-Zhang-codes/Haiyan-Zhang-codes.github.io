import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./scenes/home_page";
import AboutPage from "./scenes/about_page";
import WebAppDevPage from "./scenes/web_app_dev_projects_page";
import DataAnalyticsPage from "./scenes/data_analytics_projects_page";
import ContactMePage from "./scenes/contact_me_page";
import { ModeProvider } from "./ModeContext";
import { CssBaseline } from "@mui/material";
import i18n from "./i18n";
// import { useTranslation } from "react-i18next";


function App() {
  // const { i18n } = useTranslation();
  const setLanguageFromUrl = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="app">
      <BrowserRouter>
      <CssBaseline />
      <ModeProvider>        
          <Routes>
            <Route path="/" element={<Navigate to="/en/home" />} />
            <Route path="/en/home" element={<HomePage />} />
            <Route path="/en/web-app-dev-projects" element={<WebAppDevPage />} />
            <Route path="/en/data-analytics-projects" element={<DataAnalyticsPage />} />
            <Route path="/en/about-me" element={<AboutPage />} />
            <Route path="/en/contact-me" element={<ContactMePage />} />

            <Route path="/fr/home" element={<HomePage />} />
            <Route path="/fr/web-app-dev-projects" element={<WebAppDevPage />} />
            <Route path="/fr/data-analytics-projects" element={<DataAnalyticsPage />} />
            <Route path="/fr/about-me" element={<AboutPage />} />
            <Route path="/fr/contact-me" element={<ContactMePage />} />

            <Route path="/fr/*"
            element={() => {
              setLanguageFromUrl("fr");
              return <Navigate to="/fr/home" />
            }} />
            <Route path="/en/*"
            element={() => {
              setLanguageFromUrl("en");
              return <Navigate to="/en/home" />
            }} />
          </Routes>
      </ModeProvider>       
      </BrowserRouter>
    </div>
  );
}

export default App;
