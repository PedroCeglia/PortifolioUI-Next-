import { StackItemStyle } from "./style";
import StacksBallCanvasComponent from "@/components/3D/StacksBallComponent";

export default function StackItem({images}){
    return(
        <StackItemStyle>
            <StacksBallCanvasComponent images={images}/>
        </StackItemStyle>
    )
}