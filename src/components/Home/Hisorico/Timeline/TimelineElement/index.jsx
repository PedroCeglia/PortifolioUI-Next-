import { TimelineElementStyle } from "./style";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TimelineElementIcon from "./TimelineElementIcon";
import TimelineElmentContent from "./TimelineElementContent";

export default function TimelineElement({experiencia={title:"default",company_name:"default",points:[] , src:""}}){
    const initialConfigs = {
        contentStyle:{background: "#1d1836", color: "#fff" },
        contentArrowStyle:{ borderRight: "7px solid  #232631" },
        iconStyle:{background: experiencia.iconBg}
    }
    return(
        <TimelineElementStyle>
            <VerticalTimelineElement
                contentStyle={initialConfigs.contentStyle}
                contentArrowStyle={initialConfigs.contentArrowStyle}
                date={experiencia.date}
                iconStyle={initialConfigs.iconStyle}
                icon={<TimelineElementIcon src={experiencia.src} alt={experiencia.company_name}/>}
            >
                <TimelineElmentContent title={experiencia.title} companyName={experiencia.company_name} texts={experiencia.points}/>
            </VerticalTimelineElement>
        </TimelineElementStyle>
    )
}