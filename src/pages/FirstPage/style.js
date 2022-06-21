import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:var(--black);
    color:var(--grey2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    overflow-x:hidden;
    hr{
        min-width:100%;
        min-height:1px;
        border:none;
        color:#212529;
        background-color:#212529;
    }
`

export const Header = styled.div`
    width:90%;
    max-height:15vh;
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top: 10px;
    margin-bottom: 10px;
    Button{
        width:100px;
        height:6vh;
    }
    .mais{
        width:50px;
    }

    @media(min-width:800px){
        width:780px;
    }
`

export const ContainerTech = styled.div`
    width:90%;
    min-height:380px;
    max-height:380px;
    background-color:var(--glass);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-x:auto;
    margin-bottom:5vh;

    @media (min-width:800px){
        width:780px;
    }
`
export const Tech = styled.div`
    width:85%;
    min-height:50px;
    background-color:var(--black);
    border-radius:5px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    margin-top:18px;
    padding:0 15px 0 15px;
    div{
        width:120px;
        display:flex;
        justify-content:space-between;
    }
    @media (min-width:800px){
        width:90%;
    }
    
    :hover{
        transition:all 0.3s;
        cursor:pointer;
        background-color:var(--inputColor)
    }
`