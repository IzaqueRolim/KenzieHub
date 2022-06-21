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
        width:90%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;        
        Button{
            width:100px;
        }
    }
    @media (min-width: 500px){
        section{
            width:450px;
        }
    }
    
`
export const Content = styled.div`
    margin-top:6vh;
    width:90%;
    min-height:850px;
    background-color:var(--glass);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    div{
        min-width:90%;
        max-width:90%;
        display:flex;
        flex-direction:column;
        align-items:start;

        Input{
            min-width:100%;
            max-width:100%;
        }
        Select{
            min-width:100%;
            max-width:100%;
        }
    }
    Button{
        max-width:90%;
    }
   

    @media(min-width:500px){
        width:450px;

        div{
            min-width:85%;
        }
        Button{
            min-width:85%;
        }
    }
`