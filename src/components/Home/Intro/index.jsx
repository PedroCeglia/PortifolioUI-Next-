import { IntroContainerStyle } from "./style";
import ArticleInfo from "./ArticleInfo";
import { Computer3DComponent } from "@/components/3D";
import EstruturaSection from "@/components/EstruturaSection";

export default function IntroSection(){
    return(
        <EstruturaSection headerSectionDates={null} idSection={"intro"} changeSectionSlug={"about-me"}>        
            <IntroContainerStyle>
                <div className="content">
                    <ArticleInfo/>
                    <div className="hasSize">
                        <Computer3DComponent/>
                    </div>
                </div>                
            </IntroContainerStyle>
        </EstruturaSection>
    )
}
