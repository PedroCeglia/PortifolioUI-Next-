import { HeaderSectionStyle } from "./style"
import { motion } from "framer-motion"
import { textVariant, fadeIn } from "@/constants/motion"

export default function HeaderSection({preTitle="", title="", description=""}){
    const motionVariants = fadeIn("right", "spring", 1 * 0.2, 1)
    return(
        <HeaderSectionStyle>
            <motion.div variants={textVariant(.2)} className="section-head">
                <p>{preTitle}</p>
                <h2>{title}</h2>
            </motion.div>  
            <motion.p variants={motionVariants} className="description">{description}</motion.p>          
        </HeaderSectionStyle>
    )
}