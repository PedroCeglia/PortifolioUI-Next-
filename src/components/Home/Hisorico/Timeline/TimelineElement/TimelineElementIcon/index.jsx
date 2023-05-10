import { TimelineElementIconStyle } from "./style"

export default function TimelineElementIcon({src, alt}){
    return(
        <TimelineElementIconStyle>
            <img src={src} alt={alt} />
        </TimelineElementIconStyle>
    )
} 