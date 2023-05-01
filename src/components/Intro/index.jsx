import Desktop from "../3D/Desktop";
import { IntroContainerStyle } from "./style";

export default function Intro(){
    return(
        <IntroContainerStyle>
            <div className="content">
                <div className="text-area">
                    <h1>Ola, eu sou Pedro Ceglia !</h1>
                    <p>Seja bem vindo ao meu Portifolio.</p>
                </div>
                <Desktop/>
            </div>
            <div className="change-page"></div>
        </IntroContainerStyle>
    )
}