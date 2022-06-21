import styled from "styled-components";

export const Entrada = styled.input`
    background-color:var(--inputColor);
    color:var(--grey2);
    width:var(--inputWidth);
    height:var(--inputHeight);
    border:1px solid #F8F9FA;
    border-radius:5px;
    
    ::placeholder{
        color:var(--grey2);
        margin-left:15px;
    }
    :focus{
        padding-left:10px;
        transition:all 0.5s;
    }
`
export const Select = styled.select`
background-color:var(--inputColor);
color:var(--grey2);
width:var(--inputWidth);
height:var(--inputHeight);
border:1px solid #F8F9FA;
border-radius:5px;
`
