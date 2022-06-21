import { Entrada,Select } from "./style"
import { useState } from "react";

function Input({children,type,...rest}){

    return(
       
            <Entrada key={1} type={type} placeholder={children} {...rest}></Entrada>
    )
}

export default Input