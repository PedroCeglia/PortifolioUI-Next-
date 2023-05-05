import styled from "styled-components";
import style from "@/styles";

export const AboutContainerStyle = styled.section`
    width: 100%;
    padding: 100px 0 50px;
    min-height: 95vh;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.8)};
    color: ${style.theme.color.c1};
    font-family:${style.fonts.fontsFamily.brunoAceSc};

    .content{
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        font-size: ${style.fonts.fontsSize.normal};
        font-family: ${style.fonts.fontsFamily.cinzel};
    }
    .content .section-head{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .content .section-head p{
        font-family: ${style.fonts.fontsFamily.rajdhani};
        font-size: ${style.fonts.fontsSize.big};
        color: ${style.theme.rgbaFunctions.getLightColorRGBA(.8)};
    }
    .content .section-head h2{
        font-family: ${style.fonts.fontsFamily.cinzel};
        font-size: ${style.fonts.fontsSize.biggest};
        margin: 5px 0 20px;
    }
    .content .description{
        width: 70%;
        align-self: flex-start;
        max-width: 800px;
        min-width: 280px;
        font-family: ${style.fonts.fontsFamily.brunoAceSc};
        font-size: ${style.fonts.fontsSize.big};
    }
    .cards-container{
        margin-top: 40px;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
`
