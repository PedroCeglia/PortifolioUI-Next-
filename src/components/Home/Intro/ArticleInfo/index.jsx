import { IntroArticleInfoStyle } from "./style"
import { Computer3DComponent } from "@/components/3D";
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { fadeIn } from "@/constants/motion"

export default function ArticleInfo(){
    const tiltDefaultOptions = {
        max:35,     // max tilt rotation (degrees)
        scale:1.01,    // 2 = 200%, 1.5 = 150%, etc..
        speed:1000   // Speed of the enter/exit transition
    }
    const motionVariants = fadeIn("right", "spring", 1 * 0.5, 0.75)
    return(  
        <IntroArticleInfoStyle>
            <Tilt options={tiltDefaultOptions} className="tilt-container">
                <motion.div className="tilt-content" variants={motionVariants}>           
                    <h1><span>Olá, eu sou Pedro Ceglia,</span> um desenvolverdor Web!</h1>
                    <h2><img src="assets/icons/mapa.png"/> Rio de Janeiro, RJ, Brasil <img src="assets/icons/brasil.png"/></h2>
                    <div className="buttons-area">
                        <a href="https://github.com/PedroCeglia" target={"_blank"}><img src='assets/icons/github.png'/>Github</a>
                        <a href="https://www.linkedin.com/in/pedro-ceglia-a914941b7/" target={"_blank"}><img src='assets/icons/linkedin.png'/>Linkedin</a>                    
                    </div>    
                    <div className="hasntSize">
                        <Computer3DComponent/>
                    </div>
                </motion.div>
            </Tilt>

        </IntroArticleInfoStyle>
    )
}