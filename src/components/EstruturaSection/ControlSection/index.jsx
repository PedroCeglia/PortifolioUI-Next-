import { motion } from "framer-motion";
import { staggerContainer } from "@/constants/motion";

export default function ControlSection (Component, idName){
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        style={{width:"100%", height:"100%"}}
      >
        <div  id={idName}></div>
        <Component />
      </motion.section>
    );
  };    
}