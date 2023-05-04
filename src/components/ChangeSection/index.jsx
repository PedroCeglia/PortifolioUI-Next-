import { ChangeSectionStyle } from "./style";
import { motion } from "framer-motion";

export default function ChangeSection(){
    return(
        <ChangeSectionStyle>
            <a href='#about' className="content">
            <div className="switch">
                <motion.div
                animate={{
                    y: [0, 24, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='ball'
                />
            </div>
            </a>
        </ChangeSectionStyle>
    )
}