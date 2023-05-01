import styled from "styled-components";
import style from "../../styles";

export const EstruturaPaginaStyle = styled.div`
    min-height: calc(100vh);
    width: 100%;
    padding-top: 90px;

    position: relative;
    
    background-color: ${style.theme.backgroundColor.bc1};
    color: ${style.theme.color.c1};

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
`
export const ConteudoPaginaStyle = styled.main`
    min-height: calc(100vh - 170px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
