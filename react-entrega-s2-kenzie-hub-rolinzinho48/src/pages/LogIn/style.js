import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    background-color:var(--black);
    color:var(--grey2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    
`
export const Content = styled.div`
    margin-top:6vh;
    width:90%;
    height:70vh;
    background-color:var(--glass);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    div{
        max-width:80%;
        display:flex;
        flex-direction:column;
        align-items:start;
        
        Input{
            min-width:100%;
            max-width:100%;
        }
    }

    Button,a{
        max-width:83%;
    }
    a{
        
        max-width:83%;
        Button{
            min-width:100%;
        }
    }

    @media (min-width:500px){
        width:450px;
        height:70vh;
        div{
            min-width:var(--inputWidth);
            Input{
            }
        }
        Button,Link{
            min-width:var(--inputWidth);
        }
    }
    
   
`