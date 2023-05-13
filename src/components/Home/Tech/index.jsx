import EstruturaSection from "@/components/EstruturaSection";
import StacksListComponent from "./StacksListComponent";
import { listaTech } from "@/constants";

export default function TechSection(){
    const initialHeaderSectionConfigs = {
        preTitle:"ReactJS | NextJS | NodeJS |  ThreeJS ",
        title:"Tecnologias",
        description:"De uma olhada em algumas das tecnologias em que eu possuo experiência"
    }
    return(
        <EstruturaSection headerSectionDates={initialHeaderSectionConfigs} idSection={"tech"} changeSectionSlug={"intro"}>
            <StacksListComponent stacksList={listaTech}/>
        </EstruturaSection>
    )
}
