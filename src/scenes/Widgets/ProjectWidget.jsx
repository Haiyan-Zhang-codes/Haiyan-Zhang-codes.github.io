
import WidgetWrapper from "../../components/WidgetWrapper";
import { useTranslation } from "react-i18next";
import { Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router";



const ProjectWidget = ({
  project,
  description,
  language,
  database,
  packages,
  otherTools,
  gitHubLink,
  webAppLink,
  workFlow,
}) => {
  const theme = useTheme();
  const {i18n} = useTranslation();
  const location = useLocation();
  return (
    <WidgetWrapper m="2rem 0">
      <Typography
        fontWeight="bold"
        fontSize="1.2rem"
        padding="0.5rem 0"
        color={theme.palette.neutral.main}
      >
        <span>Project:</span> {project}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
        <span style={{ fontWeight: "bold"}}fontWeight="bold">Description:</span> {description}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
      <span style={{ fontWeight: "bold"}}fontWeight="bold">{i18n.language === 'en'? 'Language:': 'Langue:'}</span> {language}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
      <span style={{ fontWeight: "bold"}}fontWeight="bold">{i18n.language === 'en'? 'Database:': 'Base de données:'}</span> {database}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
      <span style={{ fontWeight: "bold"}}fontWeight="bold">{i18n.language === 'en'? 'Package:': 'Paquet:'}</span> {packages}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
      <span style={{ fontWeight: "bold"}}fontWeight="bold">{i18n.language === 'en'? 'Other Tools:': 'Autres outils:'}</span> {otherTools}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
      <span style={{ fontWeight: "bold"}}fontWeight="bold">{location.pathname.includes("data-analytics-projects")? "Kaggle:": "GitHub"}</span> 
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer" style={{color: theme.palette.neutral.main, marginLeft:"0.5rem" }}>
          {gitHubLink}
        </a>
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
      <span style={{ fontWeight: "bold"}}fontWeight="bold">{i18n.language === 'en'? 'Web Application Link:': "Lien de l'application web:"}</span> 
        <a href={webAppLink} target="_blank" rel="noopener noreferrer" style={{color: theme.palette.neutral.main, marginLeft:"0.5rem" }}>
          {webAppLink}
        </a>
      </Typography>
      <Typography fontWeight="bold" color={theme.palette.neutral.main} >
      {i18n.language === 'en'? 'Workflow:': "Flux de travail:"}
      </Typography>
      <ul >
        {workFlow.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "0.25rem 0",
              borderBottom: "1px solid light",
              color: theme.palette.neutral.main
            }}
          >
            <Typography >{item}</Typography>
          </li>
        ))}
      </ul>
    </WidgetWrapper>
  );
};

export default ProjectWidget;
