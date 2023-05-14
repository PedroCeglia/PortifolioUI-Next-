import style from "@/styles";
import styled from "styled-components";

export const HeaderSectionStyle = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    margin: 90px 0 30px;
    display: block;

    .section-head{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    .section-head p{
        font-family: ${style.fonts.fontsFamily.rajdhani};
        font-size: ${style.fonts.fontsSize.big};
        color: ${style.theme.rgbaFunctions.getLightColorRGBA(.8)};
    }
    .section-head h2{
        font-family: ${style.fonts.fontsFamily.montserrat};
        font-size: ${style.fonts.fontsSize.biggest};
        margin: 5px 0 20px;
    }
    .description{
        width: 70%;
        align-self: flex-start;
        max-width: 800px;
        min-width: 280px;
        font-family: ${style.fonts.fontsFamily.montserrat};
        font-size: ${style.fonts.fontsSize.big};
    }
    `