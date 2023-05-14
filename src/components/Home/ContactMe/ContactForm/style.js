import styled from "styled-components";
import style from "@/styles";

export const ContactFormStyle = styled.div`
    padding: 50px 20px;

    border: 1px solid ${style.theme.color.c1};
    border-radius: 20px;
    background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.3)};
    color: ${style.theme.color.c1};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h3{
        font-size: ${style.fonts.fontsSize.big};
        font-family: ${style.fonts.fontsFamily.ubunto};
    }

    button{
        width: 80%;
        min-width: 200px;
        max-width: 300px;

        padding: 10px 20px;
        border-radius: 10px;
        margin: 20px 0;

        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.7)};
        border: 1px solid ${style.theme.rgbaFunctions.getDarkColorRGBA(.5)};
        color: ${style.theme.color.c2};
    
        font-weight: bold;
        font-size: ${style.fonts.fontsSize.normal};
        cursor: pointer;

        transition: all .4s;
    
    }
    button:hover{
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.3)};
        color: ${style.theme.color.c1};
    }
`

export const ContactFormInputStyle = styled.div`
    width: 80%;
    max-width: 400px;
    min-width: 250px;
    margin: 20px 0 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span{
        font-size: ${style.fonts.fontsSize.littleSmall};
        color: ${style.theme.color.c1};
    }
    textarea, input{
        border: 1px solid ${style.theme.rgbaFunctions.getColor1RGBA(.5)};
        border-radius: 10px;
        font-weight: bold;
        padding: 10px 20px;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        font-family: ${style.fonts.fontsFamily.ysabey};
    }
`