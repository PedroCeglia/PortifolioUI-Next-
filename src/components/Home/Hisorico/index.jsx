import { ControlSection, HeaderSection } from "@/components/EstruturaSection";
import { HistoricoSectionStyle } from "./style";
import Timeline from "./Timeline";

function HistoricoSection(){
    const initialHeaderSectionConfigs = {
        preTitle:"Web Developer | Fullstack Developer |  UI/UX ",
        title:"Experiências",
        description:"Ao longo dos meus estudos, estudei diversas tecnologias para diversas area do desenvolvimento de software. Entre elas as que mais me destaquei foram as tecnologias para desenvolvimento Web"
    }
    return(
        <HistoricoSectionStyle>
            <HeaderSection
                preTitle={initialHeaderSectionConfigs.preTitle}
                title={initialHeaderSectionConfigs.title}
                description={initialHeaderSectionConfigs.description}
            />
            <Timeline/>
            <ControlSection slug="tech"/>
        </HistoricoSectionStyle>
    )
}

export default ControlSection(HistoricoSection, "historico")