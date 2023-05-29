import EstruturaSection from "@/components/EstruturaSection";
import { TechSectionStyle } from "./style";
import StacksListComponent from "./StacksListComponent";
import { listaTech } from "@/constants";
import Stars3DContainer from "../StartsContainer";



export default function TechSection(){
    const initialHeaderSectionConfigs = {
        preTitle:"ReactJS | NextJS | NodeJS |  ThreeJS ",
        title:"Tecnologias",
        description:"De uma olhada em algumas das tecnologias em que eu possuo experiência"
    }
    return(
        <EstruturaSection headerSectionDates={initialHeaderSectionConfigs} idSection={"tech"} changeSectionSlug={"contact-me"}>
            <TechSectionStyle>
                <StacksListComponent stacksList={listaTech}/>
                <Stars3DContainer/>                
            </TechSectionStyle>
        </EstruturaSection>
    )
}
