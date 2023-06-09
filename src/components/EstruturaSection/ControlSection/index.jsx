import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";

export default function ControlSection ({idSection,children}){
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        style={{width:"100%", height:"100%"}}
      >
        <div id={idSection}></div>
        {children}
      </motion.section>
    );
  }    
