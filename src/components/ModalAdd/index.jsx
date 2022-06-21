import { ContainerModal,Modal,HeaderModal } from "./style"
import Button from "../Button"
import Input from "../Input"
import Select from "../Select"
import axios from "axios"
import { useState } from "react"



function ModalAdd({sucess,erro,removeModal}){
    
    const [title,setTitle]  = useState()
    const [status,setStatus]= useState("Iniciante")

    const token = localStorage.getItem("token")
   
    const bodyParameters ={
        title: title,
        status: status
    }
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    

    const addTech = () =>{
        console.log(status)
        

        axios.post('https://kenziehub.herokuapp.com/users/techs/', 
            bodyParameters,
            config
          )
          .then(function (response) {
            sucess(response);
            removeModal(false);
          })
          .catch(function (error) {
            erro(error.response.data.message);
            console.error(error);
          });
        
    }

    return(
        <ContainerModal>
            <Modal>
                <HeaderModal>
                    <h3>Cadastrar Tecnologia</h3>
                    <Button buttonColor="var(--inputColor)" onClick={()=>removeModal(false)}>X</Button>
                </HeaderModal>
                <label>Nome</label>
                <Input onChange={(e)=>setTitle(e.target.value)} type="text">TypeScript</Input>
                <label>Selecionar status</label>
                <Select onChange={(e)=>setStatus(e.target.value)} options={["Iniciante","Intermediario","Avançado"]}></Select>
                <Button className="cadastrar"  onClick={addTech} buttonColor="var(--pink)">Cadastrar tecnologia</Button>            
            </Modal>
        </ContainerModal>
    )
}
export default ModalAdd