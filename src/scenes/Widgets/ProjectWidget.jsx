
import WidgetWrapper from "../../components/WidgetWrapper";

import { Typography, useTheme } from "@mui/material";

const ProjectWidget = ({
  project,
  description,
  language,
  database,
  packages,
  gitHubLink,
  webAppLink,
  workFlow,
}) => {
  const theme = useTheme();

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
        Description: {description}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
        Language: {language}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
        Database: {database}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
        Packages: {packages}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
        GitHub: {gitHubLink}
      </Typography>
      <Typography paddingBottom="0.5rem" color={theme.palette.neutral.main}>
        Web Application Link: 
        <a href={webAppLink} target="_blank" rel="noopener noreferrer" style={{color: theme.palette.neutral.main, marginLeft:"0.5rem" }}>
          {webAppLink}
        </a>
      </Typography>
      <Typography fontWeight="bold" color={theme.palette.neutral.main} >
        Workflow
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
