import { StacksListComponentStyle } from "./style";
import StackItem from "./StackItem";

export default function StacksListComponent({stacksList=[]}){
    return(
        <StacksListComponentStyle>
            {stacksList.map((stack, key)=><StackItem images={stack.images} key={key}/>)}
        </StacksListComponentStyle>
    )
}