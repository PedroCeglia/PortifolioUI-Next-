import { ChangeSectionStyle } from "./style";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function ChangeSection(){
    return(
        <ChangeSectionStyle>
            <Link to='about-me-section' smooth duration={1000} className="content">
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
            </Link>
        </ChangeSectionStyle>
    )
}