import {ColaboradorStyle, ColaboradorCabecalho, IMG, Rodape, H4, H5} from './styleColaborador.js'

const Colaborador = ({imagem,nome,cargo,corDeFundo})=>{

    return (
        <ColaboradorStyle>
            <ColaboradorCabecalho corDeFundo={corDeFundo}>
                <IMG src={imagem} alt={nome} />
            </ColaboradorCabecalho>
            <Rodape>
                <H4>{nome}</H4>
                <H5>{cargo}</H5>
            </Rodape>
        </ColaboradorStyle>
    )

}

export default Colaborador