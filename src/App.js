import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home_page";
import AboutPage from "./pages/about_page";
import WebAppDevPage from "./pages/web_app_dev_projects_page";
import DataAnalyticsPage from "./pages/data_analytics_projects_page";
import ContactMePage from "./pages/contact_me_page";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/web-app-dev-projects" element={<WebAppDevPage />} />
          <Route path="/data-analytics-projects" element={<DataAnalyticsPage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/contact-me" element={<ContactMePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
