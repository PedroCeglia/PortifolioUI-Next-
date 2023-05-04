import {AboutContainerStyle} from "./style";
import ChangeSection from '@/components/ChangeSection';
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

import { textVariant } from "@/constants/motion";

export default function AboutMe(){
    return(
        <AboutContainerStyle>
            <div className="content">
                <motion.div variants={textVariant()}>
                    <p>Introdução | Pedro Ceglia | Portifolio UI</p>
                    <h2>Sobre Mim</h2>
                </motion.div>
                <motion.p>
                    Eu sou Pedro Silveira Ceglia, tenho 19 anos e sou desenvolverdor Web. 
                    Estudo programação desde 2019, e em 2021 comecei a me especializar em desenvolvimento Web.
                </motion.p>
                <div className="cards-container">
                    <InfoCard name="Web" src="https://firebasestorage.googleapis.com/v0/b/portifolio-16fa8.appspot.com/o/PedroCeglia%2Foutros%2Fprojeto-portifolio-UI-%2Fweb.png?alt=media&token=4c63bf1c-8991-4e97-942e-631944815a14"
                     index={1}/>
                    <InfoCard name="Backend" src="https://firebasestorage.googleapis.com/v0/b/portifolio-16fa8.appspot.com/o/PedroCeglia%2Foutros%2Fprojeto-portifolio-UI-%2Fbackend.png?alt=media&token=e8d97edd-cdbd-4f8f-bde5-c88d9472ea3b"
                     index={2}/>
                    <InfoCard name="Mobile" src="https://firebasestorage.googleapis.com/v0/b/portifolio-16fa8.appspot.com/o/PedroCeglia%2Foutros%2Fprojeto-portifolio-UI-%2Fbackend.png?alt=media&token=e8d97edd-cdbd-4f8f-bde5-c88d9472ea3b"
                     index={3}/>
                    <InfoCard name="Conent Creator" src="https://firebasestorage.googleapis.com/v0/b/portifolio-16fa8.appspot.com/o/PedroCeglia%2Foutros%2Fprojeto-portifolio-UI-%2Fcreator.png?alt=media&token=2634898d-14f3-46a4-a688-65351f89b0f1"
                     index={4}/>
                </div>
            </div>
            <ChangeSection/>
        </AboutContainerStyle>
    )
}