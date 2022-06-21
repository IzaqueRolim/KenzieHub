import axios from "axios"
import KenzieHub from '../../assets/KenzieHub.png'
import lixeira from '../../assets/lixeira.png'
import Button from '../../components/Button/index'
import Modal from '../../components/ModalAdd/index'
import { useLocation } from "react-router-dom"
import {Container,Header,ContainerTech,Tech} from './style'
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function FirstPage(){

    const [modal,setModal] = useState(false)
    const [user,setUser]=useState({name:"",course_module:"",techs:[]})

    const location = useLocation()
    const token = localStorage.getItem("token")
   
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(`https://kenziehub.herokuapp.com/users/${location.state.id}`)
    .then((response) =>{
        setUser(response.data)
    })

    const exibirMensageSucess =(mensage) =>{
        toast.success('Tecnologia cadastrada com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });   
    }
    const exibirMensageError =(mensage) =>{
        toast.error(`${mensage}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });   
    }

    const deleteTech = (id) => {
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,config)
    }
    
    return(   
        <Container>
            <ToastContainer/>
            <Header>
                <img src={KenzieHub} alt="" />
                <Link to="/" >
                    <Button onClick={()=>localStorage.setItem('token','')} buttonColor="var(--glass)">Sair</Button>
                </Link> 
            </Header>
            <hr/>
            <Header>
            <h1>Olá, {user.name}</h1>
            <span>{user.course_module}</span>
            </Header>
            <hr/>
            <Header>
            <h2>Tecnologias</h2>
            <Button onClick={()=>modal==false?setModal(true):setModal(false)} className="mais" buttonColor="var(--glass)">+</Button>
            </Header>
            <ContainerTech>
            {
                user.techs.map((e,index)=>(
                    <Tech key={index}>
                            <span>{e.title}</span> 
                            <div>     
                                <span>{e.status}</span>
                                <img onClick={()=>deleteTech(e.id)} src={lixeira} />
                            </div>
                        </Tech>
                    ))
                }
            </ContainerTech>
            {
                modal&&
                <Modal sucess={exibirMensageSucess} erro={exibirMensageError} removeModal={setModal}></Modal>
            }
            
                
                
        </Container>
        )
    
}     

export default FirstPage