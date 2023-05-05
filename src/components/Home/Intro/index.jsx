import { IntroContainerStyle } from "./style";
import ArticleInfo from "./ArticleInfo";
import Desktop3DComponent from "../../3D/Desktop3DComponent";
import ChangeSection from '@/components/ChangeSection';

export default function Intro(){
    return(
        <IntroContainerStyle>
            <div className="content">
                <ArticleInfo/>
                <div className="hasSize">
                    <Desktop3DComponent/>
                </div>
            </div>
            <ChangeSection/>
        </IntroContainerStyle>
    )
}