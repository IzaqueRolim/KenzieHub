import { Botao } from "./style"

function Button({children,...rest}){

    return(
        <Botao {...rest}>{children}</Botao>
    )

}

export default Button