import {Button} from './styleBotao.js'

const Botao = (props) =>{

    return (
        <Button>
            {props.children}
        </Button>
    )

}

export default Botao