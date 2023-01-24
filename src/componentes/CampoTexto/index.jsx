import { useState } from "react"
import { CampoTextoDiv, LabelTexto, Input } from "./StyleCampoTexto"
const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    // let valor = "Alessandro Pedroso"

  

    const aoDigitado = (evento)=>{
        
        props.aaAlterado(evento.target.value)
    }


    return (
        
            <CampoTextoDiv>
                <LabelTexto>{props.label}</LabelTexto>
                <Input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
            </CampoTextoDiv>    
    )

}

export default CampoTexto