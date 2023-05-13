import styled from "styled-components";
import style from "@/styles";

export const EstruturaSectionStyle = styled.section`
    width: 100%;
    padding: 80px 0 50px;
    min-height: calc(95vh - 130px);

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.isOdd ? style.theme.rgbaFunctions.getColor2RGBA(.8):style.theme.rgbaFunctions.getColor1RGBA(.8)};
    color: ${style.theme.color.c1};
    font-family:${style.fonts.fontsFamily.brunoAceSc};
`

export const EstruturaSectionIntroStyle = styled.section`
    width: 100%;
    min-height: 95vh;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.8)};
    color: ${style.theme.color.c1};
    font-family:${style.fonts.fontsFamily.brunoAceSc};
`