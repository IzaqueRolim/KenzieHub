import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;
    background-color:var(--black);
    color:var(--grey2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    section{
        margin-top:10vh;
        width:30%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;        
        Button{
            width:100px;
        }
    }
    
`
export const Content = styled.div`
    margin-top:6vh;
    width:30%;
    min-height:850px;
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