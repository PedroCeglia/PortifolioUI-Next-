import styled from "styled-components";
import style from "@/styles";

export const AboutContainerStyle = styled.section`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    font-size: ${style.fonts.fontsSize.normal};
    font-family: ${style.fonts.fontsFamily.cinzel};
    
    .cards-container{
        margin-top: 40px;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }
`
