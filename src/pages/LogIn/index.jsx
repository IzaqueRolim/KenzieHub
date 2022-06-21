import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Img from '../../assets/KenzieHub.png'
import {Container,Content} from './style'
import { Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function LogIn(){

    const history = useHistory()

    const baseUrl = 'https://kenziehub.herokuapp.com'
    const[userName,setUserName] = useState()
    const[userPassoword,setPassword] = useState()

    const Logar = () => {
        axios.post(`${baseUrl}/sessions`,{
            email: userName,
            password: userPassoword
          })
          .then(function (response) {
            localStorage.setItem("token",response.data.token);
            history.push(`/:${response.data.user.name}`,{
                id:response.data.user.id
            });
          })
          .catch(function (error) {
            toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });   
            console.error(error);
          }
        )
    }

    return(
            <Container>
                 <ToastContainer/>
                <img src={Img} />
                <Content>
                    <h2>Logar</h2>
                    

                    <div>     
                        <label>Email</label>
                        <Input onChange={(e)=>setUserName(e.target.value)} inputColor="inputColor" type="text">Email</Input>
                    </div>
                    <div>
                        <label>Senha</label>
                        <Input onChange={(e)=>setPassword(e.target.value)} type="password">Senha</Input>
                    </div>

                    <Button onClick={Logar} type="submit" buttonColor='var(--pink)'>Logar</Button>
                    
                   
                    <span>Ainda nao tem uma conta?</span>
                    <Link to="signup">
                        <Button buttonColor='var(--grey)'>Cadastrar</Button>
                    </Link>
                </Content>
            </Container>  
    )
}

export default LogIn