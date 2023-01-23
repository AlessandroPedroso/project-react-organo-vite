import { CampoTextoDiv, LabelTexto,Input } from "./StyleCampoTexto"
const CampoTexto = (props) =>{

    const placeholderModificada = `${props.placeholder}...`

    return (
        <CampoTextoDiv>
            <LabelTexto>{props.label}</LabelTexto>
            <Input placeholder={placeholderModificada}/>
        </CampoTextoDiv>
    )

}

export default CampoTexto