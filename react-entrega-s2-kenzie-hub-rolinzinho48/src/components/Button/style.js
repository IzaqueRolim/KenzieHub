import styled from "styled-components";

export const Botao = styled.button`
background-color:${props=>props.buttonColor};
color:white;
width:calc(var(--inputWidth)*1);
height:var(--inputHeight);
border-style:none;
border-radius:5px;
`