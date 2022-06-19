import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Img from '../../assets/KenzieHub.png'
import {Container,Content} from './style'
import { Link, useHistory} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

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
            history.push(`/:${response.data.user.name}`,{nome:response.data.user.name});
          })
          .catch(function (error) {
            console.error(error);
          }
        )
    }

    return(
            <Container>
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