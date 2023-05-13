import ChangeSection from "./ChangeSection";
import ControlSection from "./ControlSection";
import HeaderSection from "./HeaderSection";

import { EstruturaSectionStyle, EstruturaSectionIntroStyle } from "./style";


export default function EstruturaSection({children, headerSectionDates, changeSectionSlug, idSection}){
    function veryfyIfSectionIsOdd(){
        if(idSection=="about-me" || idSection=="tech"){
            return true
        }
    }
    const sectionIsOdd = veryfyIfSectionIsOdd()

    if(headerSectionDates != null){
        return(
            <ControlSection idSection={idSection}>
                <EstruturaSectionStyle isOdd={sectionIsOdd}>
                    <HeaderSection
                        preTitle={headerSectionDates.preTitle}
                        title={headerSectionDates.title}
                        description={headerSectionDates.description}
                    />
                    {children}
                    <ChangeSection slug={changeSectionSlug}/>
                </EstruturaSectionStyle>
            </ControlSection>
        )
    } else{
        return(
            <ControlSection idSection={idSection}>
                <EstruturaSectionIntroStyle>
                    {children}
                    <ChangeSection slug={changeSectionSlug}/>
                </EstruturaSectionIntroStyle>
            </ControlSection> 
        )
    }

    
}
