import styled from "styled-components";
import style from "@/styles";

export const EstruturaSectionStyle = styled.section`
    width: 100%;
    min-height: calc(95vh);

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background-color: ${props => props.isOdd ? style.theme.rgbaFunctions.getColor2RGBA(.8):style.theme.rgbaFunctions.getColor1RGBA(.8)};
    color: ${style.theme.color.c1};
    font-family:${style.fonts.fontsFamily.montserrat};
`
