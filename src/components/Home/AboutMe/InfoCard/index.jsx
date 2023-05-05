import { InfoCardStyle } from "./style"
import { motion } from "framer-motion"
import {Tilt} from "react-tilt"

import { fadeIn } from "@/constants/motion"

export default function InfoCard({name, src, index}){
    const defaultOptions = {
        max:35,     // max tilt rotation (degrees)
        scale:1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:1000   // Speed of the enter/exit transition
    }
    const motionVariants = fadeIn("right", "spring", 1 * 0.5, 0.75)
    return(
        <InfoCardStyle>
            <Tilt options={defaultOptions} className='tilt-container'>
                <motion.div
                    variants={motionVariants}
                    className='tilt-content'
                >
                    <img src={src} alt={`Image ${name}`}/>
                    <h3>{name}</h3>
                </motion.div>
            </Tilt>
        </InfoCardStyle>
    )
}
