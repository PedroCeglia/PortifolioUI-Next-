import styled from "styled-components";
import style from "@/styles";

export const InfoCardStyle = styled.div`
    min-width: 270px;
    width: 100%;
    max-width: 500px;
    min-height: 300px;

    background-color: ${style.theme.rgbaFunctions.getColor1RGBA(.5)};

    .tilt-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tilt-content{}
    img{
        width: 40px;
        height: 40px;
        object-fit: cover;
    }
`