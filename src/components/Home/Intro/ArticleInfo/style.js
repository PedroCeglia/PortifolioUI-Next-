import styled from "styled-components";
import style from "@/styles";


export const IntroArticleInfoStyle = styled.article`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;

    position: relative;
    font-family: ${style.fonts.fontsFamily.poppins};
    font-weight: 100;
    
    .tilt-container{
        width: 80%;
        height: 100%;
        border-radius: 20px;
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.2)};
        cursor: pointer;
    }
    .tilt-content{
        width: 100%;
        min-height: 70vh;
        padding: 20px;
        background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.5)};
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        transition: all 1s;
    }

    @media all and (max-width:1160px){
        align-items: center;
    }

    h1{
        font-size: ${style.fonts.fontsSize.bigger};
        word-spacing: 3px;
        letter-spacing: 2px;
        font-weight: 100;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    h2{
        font-size: ${style.fonts.fontsSize.big};
        word-spacing: 3px;
        letter-spacing: 2px;
        font-weight: 100;
        margin-top: 10px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        
    } 
    h2 img{
        width: 25px;
        margin: 0 10px;
        object-fit: cover;
    }
    .buttons-area{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .buttons-area a{
        text-decoration: none;
        color: ${style.theme.color.c1};
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.3)};
        padding: 8px 10px;
        border: 1px solid ${style.theme.backgroundColor.bc1};
        border-radius: 10px;
        margin: 20px 5px;

        cursor: pointer;
        transition: all 0.3s linear;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .buttons-area a:hover{
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.6)};
        color: ${style.theme.color.c2};
    }
    .buttons-area a img{
        width: 25px;
        margin: 0 10px;
        object-fit: cover;
    }
    @media all and (max-width:1100px){
        .hasntSize{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    @media all and (min-width:1100px){
        .hasntSize{
            display: none;
        }
    }
    @media all and (max-width:450px){
        h1{
            font-size: ${style.fonts.fontsSize.littleBig};
        }
        h2{
            font-size: ${style.fonts.fontsSize.normal};
        }
    }
    @media all and (max-width:350px){
        h1{
            font-size: ${style.fonts.fontsSize.normal};
        }
        h2{
            font-size: ${style.fonts.fontsSize.littleSmall};
        }
        h2 img{
            width: 20px;
        }
    }
`