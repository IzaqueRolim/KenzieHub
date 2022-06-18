import Input from '../../components/Input/index'
import Button from '../../components/Button/index'
import Img from '../../assets/KenzieHub.png'
import {Container,Content} from './style'
import { Link } from 'react-router-dom'

function FirstPage(){

    return(
        <>   
            <Container>
                <img src={Img} />
                <Content>
                    <h2>Login</h2>
                    <div>     
                        <label>Email</label>
                        <Input type="text">Email</Input>
                    </div>
                    <div>
                        <label>Senha</label>
                        <Input type="password">Senha</Input>
                    </div>
                    <Button buttonColor='var(--pink)'>Logar</Button>
                    <span>Ainda nao tem uma conta?</span>
                    <Link to="signup">
                        <Button buttonColor='var(--grey)'>Cadastrar</Button>
                    </Link>
                </Content>
            </Container>
        </>
    )
}

export default FirstPage