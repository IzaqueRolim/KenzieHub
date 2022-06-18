import {Container,Content} from './style'
import Img from '../../assets/KenzieHub.png'
import Input  from '../../components/Input/index'
import Button from '../../components/Button/index'
import { Link } from 'react-router-dom'

function SignUp(){
    return(
        <Container>
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
                    <lanel>Nome</lanel>
                    <Input type = "text">Digite seu nome</Input>
                </div>
                <div>
                    <lanel>Email</lanel>
                    <Input type = "text">Digite seu email</Input>
                </div>
                <div>
                    <lanel>Senha</lanel>
                    <Input type = "password">Digite sua senha</Input>
                </div>
                <div>
                    <lanel>Confirme sua senha</lanel>
                    <Input type = "password">Digite novamente sua senha</Input>
                </div>
                <div>
                    <lanel>Bio</lanel>
                    <Input type = "text">Fale sobre você</Input>
                </div>
                <div>
                    <lanel>Contato</lanel>
                    <Input type = "number">Opção de contato</Input>
                </div>

                <Button buttonColor="var(--pink)">Cadastrar</Button>
            </Content>
        </Container>
    )
}

export default SignUp