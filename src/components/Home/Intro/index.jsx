import { IntroContainerStyle } from "./style";
import ArticleInfo from "./ArticleInfo";
import Desktop3DComponent from "../../3D/Desktop3DComponent";
import { ControlSection, ChangeSection } from "@/components/EstruturaSection";

function IntroSection(){
    return(
        <IntroContainerStyle>
            <div className="content">
                <ArticleInfo/>
                <div className="hasSize">
                    <Desktop3DComponent/>
                </div>
            </div>
            <ChangeSection slug={"about-me"}/>
        </IntroContainerStyle>
    )
}

export default ControlSection(IntroSection, "intro")