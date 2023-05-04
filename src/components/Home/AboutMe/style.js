import styled from "styled-components";
import style from "@/styles";

export const AboutContainerStyle = styled.section`
    width: 100%;
    padding: 50px 0;
    min-height: 95vh;
    padding-top: 90px;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.8)};
    background-repeat: no-repeat; 
    background-size: cover;

    color: ${style.theme.color.c1};
    font-family:${style.fonts.fontsFamily.brunoAceSc};

    .content{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    @media all and (max-width:1100px){
        .hasSize{
            display: none;
        }
        .content{
            flex-direction: column-reverse;
        }
    }
    @media all and (min-width:1100px){
        .hasSize{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
