import { TimelineStyle } from "./style";
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from "@/constants";
import TimelineElement from "./TimelineElement";



export default function Timeline(){
    return(
        <TimelineStyle>
            <VerticalTimeline>
                {experiences.map((experiencia,key)=>{
                    return(<TimelineElement experiencia={experiencia} key={key}/>)
                })}
            </VerticalTimeline>
        </TimelineStyle>
    )
}