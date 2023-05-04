'use client'

import styled from "styled-components";
import style from "../../../styles";


export const HeaderStyle = styled.header`
    height: 80px;
    width: 100%;
    padding: 20px;
    position: fixed;
    top: 0;
    z-index: 10;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color:${style.theme.color.c1};

    font-family:${style.fonts.fontsFamily.brunoAceSc};

    span{
        font-size: ${style.fonts.fontsSize.big};
        margin-left: 20px;
        width: 500px;
    }
`

export const HeaderNavStyle = styled.div`
    position: relative;
    padding: 30px;
    @media all and (min-width:1000px) {
        .hasntSize, .hasntSize.isClose, .hasntSize.isOpen{
            display: none;
        }
        .hasSize{
            display: flex;
            nav,
            nav ul{
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                padding: 5px 10px;
            }
            nav ul li{
                margin: 10px;
                list-style: none;

                display: flex;
                justify-content: center;
                align-items: center;
            }
            nav ul li a{
                text-decoration: none;
                font-size: ${style.fonts.fontsSize.normal};
                color:${style.theme.color.c1};

            }
        }
    }
    @media all and (max-width:1000px) {
        .hasSize{
            display: none;
        }
        .hasntSize.isClose{
            display: flex;

            .imgToggle.closeImage{
                display: none;
            }
            .imgToggle.openImage{
                display: block;
                width: 40px;
                height: 40px;
            }
            nav,nav ul{
                display: none;
            }

        }
        .hasntSize.isOpen{
            position: absolute;
            right: 10px;
            top: 10px;
            border-radius: 10px;
            background: ${style.theme.createSimpleGradient(style.theme.backgroundColor.bc1,style.theme.rgbaFunctions.getLightColorRGBA(.09))};
            border: 2px solid ${style.theme.rgbaFunctions.getLightColorRGBA(.2)};
            color: ${style.theme.color.c1};
            
            display: flex;
            justify-content: center;
            align-items: flex-start;  
            object-fit: cover;

            .imgToggle.openImage{
                display: none;
            }
            .imgToggle.closeImage{
                display: block;
            }
            nav, nav ul{
                margin: 10px;
                width: 200px;
                list-style: none;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items:flex-start;
            }
            nav ul li{
                width: 100%;
            }
            nav ul li a{
                text-decoration: none;
                color: ${style.theme.color.c1};
                font-size: ${style.fonts.fontsSize.big};
            }
        }
        .imgToggle{
            margin: 15px;
            width: 30px;
            height: 30px;
            object-fit: cover;
            cursor: pointer;
        }
        .imgToggle:hover{
            filter: drop-shadow(1px 1px 1px ${style.theme.rgbaFunctions.getLightColorRGBA(.4)});
        }

    }
`