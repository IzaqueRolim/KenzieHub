import { Selecao } from "./style";

function Select({options,...rest}){
 
    return(
        <Selecao {...rest}>
            {
                options.map((element,index)=>(
                    <option key={index} value={element}>{element}</option>
                ))
            }
        </Selecao>
    )
}

export default Select