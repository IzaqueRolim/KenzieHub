import {Container,Content} from './style'
import Img from '../../assets/KenzieHub.png'
import Input  from '../../components/Input/index'
import Button from '../../components/Button/index'
import Select from '../../components/Select/index'
import { Link,Redirect,useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function SignUp(){

    const history = useHistory()

    const baseUrl = 'https://kenziehub.herokuapp.com'
    const [userName,setUserName]         = useState()
    const [userEmail,setUserEmail]       = useState()
    const [userPassword,setUserPassword] = useState()
    const [userBio,setUserBio]           = useState()
    const [userContact,setUserContact]   = useState()
    const [userCourseModule,setCouseModule]= useState("Primeiro módulo (Introdução ao Frontend)")

  

    function SignUp(){
        
        axios.post(`${baseUrl}/users`,{
            email:userEmail,
            password:userPassword,
            name:userName,
            bio:userBio,
            contact:userContact,
            course_module:userCourseModule      
          })
          .then(function (response) {
            console.log(response);
            history.push("/")
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
            <section>
                <img src={Img}/>
                <Link to="/">
                    <Button buttonColor="var(--glass)">Voltar</Button>
                </Link>
            </section>
            <Content>
                <h2>Crie sua conta</h2>
                <span>Rapido e gratis, vamos nessa</span>
                <div>
                    <label>Nome</label>
                    <Input onChange={(e)=>setUserName(e.target.value)} type = "text">Digite seu nome</Input>
                </div>
                <div>
                    <label>Email</label>
                    <Input onChange={(e)=>setUserEmail(e.target.value)} type = "text">Digite seu email</Input>
                </div>
                <div>
                    <label>Senha</label>
                    <Input onChange={(e)=>setUserPassword(e.target.value)} type = "password">Digite sua senha</Input>
                </div>
               
                <div>
                    <label>Bio</label>
                    <Input onChange={(e)=>setUserBio(e.target.value)} type = "text">Fale sobre você</Input>
                </div>
                <div>
                    <label>Contato</label>
                    <Input onChange={(e)=>setUserContact(e.target.value)} type = "text">Opção de contato</Input>
                </div>
                <div>
                    <label>Modulo Atual</label>
                    <Select onChange={(e)=>setCouseModule(e.target.value)} options={["Primeiro módulo (Introdução ao Frontend)","Segundo módulo (Frontend Avançado)","Terceiro módulo (Introdução ao Backend)","Quarto módulo (Backend Avançado)"]}></Select>
                </div>

                <Button onClick={SignUp} buttonColor="var(--pink)">Cadastrar</Button>
            </Content>    
        </Container>
    )
}

export default SignUp