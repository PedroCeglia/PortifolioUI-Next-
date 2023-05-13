import { IntroContainerStyle } from "./style";
import ArticleInfo from "./ArticleInfo";
import Desktop3DComponent from "../../3D/Desktop3DComponent";
import EstruturaSection from "@/components/EstruturaSection";

export default function IntroSection(){
    return(
        <EstruturaSection headerSectionDates={null} idSection={"intro"} changeSectionSlug={"about-me"}>        
            <IntroContainerStyle>
                <div className="content">
                    <ArticleInfo/>
                    <div className="hasSize">
                        <Desktop3DComponent/>
                    </div>
                </div>                
            </IntroContainerStyle>
        </EstruturaSection>
    )
}
