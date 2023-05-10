import styled from "styled-components";
import style from "@/styles";

export const TimelineElementContentStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        font-size: ${style.fonts.fontsSize.littleBig};
    }
    div h3{
        font-size: ${style.fonts.fontsSize.littleBig};
        margin: 0;
    }
    div p{
        margin: 0;
        font-size: ${style.fonts.fontsSize.littleSmall};
    }

    ul{
        padding: 20px;
    }
    ul li{
        font-size: ${style.fonts.fontsSize.normal};
        margin: 10px;
    }
`