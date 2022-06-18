import { Entrada } from "./style"

function Input({children,type,...rest}){
    return(
        <Entrada key={1} type={type} placeholder={children} {...rest}></Entrada>
    )
}

export default Input