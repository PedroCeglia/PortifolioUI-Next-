import styled from "styled-components";
import style from "@/styles";

export const InfoCardStyle = styled.div`
    min-width: 270px;
    width: 100%;
    max-width: 250px;
    margin: 20px;

    .tilt-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${style.theme.rgbaFunctions.getColor1RGBA(.5)};
        border-radius: 20px;
    }
    .tilt-content{
        height: 100%;
        width: 100%;
        min-height: 300px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        background: ${style.theme.createSimpleGradient(style.theme.rgbaFunctions.getColor1RGBA(.6), style.theme.rgbaFunctions.getLightColorRGBA(.1))};
        transition: all .4s;
        border-radius: 20px;

    }
    .tilt-content:hover{
        background: ${style.theme.createSimpleGradient(style.theme.rgbaFunctions.getColor1RGBA(.6), style.theme.rgbaFunctions.getLightColorRGBA(.2))};
    }
    img{
        margin: 20px;
        width: 50px;
        height: 50px;
        object-fit: cover;
    }
    h3{
        font-size: ${style.fonts.fontsSize.big};
        font-family: ${style.fonts.fontsFamily.brunoAceSc};
        color: ${style.theme.color.c1};
    }
`