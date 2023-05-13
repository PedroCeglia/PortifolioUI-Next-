import EstruturaSection from "@/components/EstruturaSection";
import Timeline from "./Timeline";

export default function HistoricoSection(){
    const initialHeaderSectionConfigs = {
        preTitle:"Web Developer | Fullstack Developer |  UI/UX ",
        title:"Experiências",
        description:"Ao longo dos meus estudos, estudei diversas tecnologias para diversas area do desenvolvimento de software. Entre elas as que mais me destaquei foram as tecnologias para desenvolvimento Web"
    }
    return(
        <EstruturaSection headerSectionDates={initialHeaderSectionConfigs} idSection={"historico"} changeSectionSlug={"tech"}>        
            <Timeline/>
        </EstruturaSection>
    )
}
