import ProjectWidget from "./ProjectWidget";
import { useTranslation } from "react-i18next";

const DataProjectsWidget = () =>{
    const {t} = useTranslation()
    const contents = t("data_analysis_project", {returnObjects: true})


    return(
        <>
        {contents.map((content, index) => (
            <ProjectWidget
                key = {index} 
                project={content.project}
                description={content.description}
                language={content.language}
                database={content.database}
                packages={content.packages}
                otherTools={content.other_tools}
                gitHubLink={content.github_link}
                webAppLink = {content.web_app_link}
                workFlow = {content.workflow}
            />
        ))}

        </>
    )


}

export default DataProjectsWidget