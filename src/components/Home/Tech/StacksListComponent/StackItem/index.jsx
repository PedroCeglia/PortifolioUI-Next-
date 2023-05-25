import { StackItemStyle } from "./style";
import { StackBall3DComponent } from "@/components/3D";

export default function StackItem({images}){
    return(
        <StackItemStyle>
            <StackBall3DComponent images={images}/>
        </StackItemStyle>
    )
}