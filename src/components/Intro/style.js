import styled from "styled-components";
import style from "@/styles";

export const IntroContainerStyle = styled.section`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color:${style.theme.backgroundColor.bc2};
    color: ${style.theme.color.c1};

    .content{
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .content .text-area{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        h1{
            font-size: ${style.fonts.fontsSize.big};
            display: inline-block;
        }
        p{
            font-size: ${style.fonts.fontsSize.big};
            display: inline-block;
        }
    }
`