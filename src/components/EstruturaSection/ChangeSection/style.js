import styled from "styled-components"
import style from "@/styles";

export const ChangeSectionStyle = styled.div`
    width: 33px;
    height: 70px;
    position: absolute;
    bottom: -30px;
    z-index: 9;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .content{
        height: 70px;
        width: 33px;
        border-radius: 20px;
        background-color: ${style.theme.backgroundColor.bc5};
    }
    .content .switch{
        height: 100%;
        width: 100%; 
        border-radius: 10px;
        background-color: ${style.theme.rgbaFunctions.getDarkColorRGBA(.2)};

        border: 2px solid ${style.theme.rgbaFunctions.getLightColorRGBA(.5)};;
    }
    .content .switch .ball{
        height: 29px;
        width: 29px; 
        border-radius: 30%;
        border: 2px solid ${style.theme.backgroundColor.bc3};  
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.5)};  
    }
`