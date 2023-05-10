import {TimelineElementContentStyle} from "./style"

export default function TimelineElmentContent({title="", companyName="", texts=[]}){
    return(
        <TimelineElementContentStyle>
            <div>
                <h3>{title}</h3>
                <p>{companyName}</p>
            </div>
            <ul>
                {texts.map((text, key)=>(<li key={key}>{text}</li>))}
            </ul>
        </TimelineElementContentStyle>
    )
}