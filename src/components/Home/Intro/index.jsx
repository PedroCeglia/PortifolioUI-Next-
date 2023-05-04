import { IntroContainerStyle, IntroArticleInfoStyle } from "./style";
import Desktop3DComponent from "../../3D/Desktop3DComponent";
import ChangeSection from '@/components/ChangeSection';

export default function Intro(){
    return(
        <IntroContainerStyle id="about">
            <div className="content">
                <IntroArticleInfoStyle>
                    <div className="content">
                        <h1><span>Olá, eu sou Pedro Ceglia,</span> um desenvolverdor Web!</h1>
                        <h2><img src="assets/icons/mapa.png"/> Rio de Janeiro, RJ, Brasil <img src="assets/icons/brasil.png"/></h2>
                        <div className="buttons-area">
                            <a href="https://github.com/PedroCeglia" target={"_blank"}><img src='assets/icons/github.png'/>Github</a>
                            <a href="https://www.linkedin.com/in/pedro-ceglia-a914941b7/" target={"_blank"}><img src='assets/icons/linkedin.png'/>Linkedin</a>                    
                        </div>    
                        <div className="hasntSize">
                            <Desktop3DComponent/>
                        </div>
                    </div>
                </IntroArticleInfoStyle>
                <div className="hasSize">
                    <Desktop3DComponent/>
                </div>
            </div>
            <ChangeSection/>
        </IntroContainerStyle>
    )
}