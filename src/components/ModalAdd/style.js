import styled from "styled-components";

export const ContainerModal = styled.div`
    position: fixed;
    min-width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    
`
export const HeaderModal = styled.div`
    width:100%;
    height:7vh;
    background-color:var(--inputColor);
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    gap:120px;
    Button{
        width:50px;
        height:7vh;
    }

    @media(max-width:450px){
        gap:50px;
        Button{
            width:50px;
            height:7vh;
        }
    }
`

export const Modal = styled.div`
    width:370px;
    height:340px;
    background-color:var(--glass);
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:15px;
    

    @media(max-width:450px){
        width:70%;

        Input,Select,.cadastrar{
            min-width:80%;
            max-width:80%;
        }
        
    }
`