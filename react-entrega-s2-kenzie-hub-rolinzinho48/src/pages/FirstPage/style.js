import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color:var(--black);
    color:var(--grey2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`
export const Content = styled.div`
    margin-top:6vh;
    width:420px;
    height:70vh;
    background-color:var(--glass);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    div{
        display:flex;
        flex-direction:column;
        align-items:start;

    }
`