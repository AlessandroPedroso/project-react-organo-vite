import {Footer,Ul,P} from './styleRodape.js'

const Rodape = () =>{

    return (
        <Footer>

            <section>
                <Ul>
                    <li>
                        <a href='facebook.com' target="_blank">
                            <img src="./fb.png" alt="facebook"/>
                        </a>
                    </li>

                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="./tw.png" alt="twitter"/>
                        </a>
                    </li>

                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="./ig.png" alt="instagram"/>
                        </a>
                    </li>
                </Ul>
            </section>

            <section>
                <img src="./logo.png" alt="logo" />
            </section>

            <section>
                <P>
                    Desenvolvido por Alessandro Pedroso.
                </P>
            </section>

        </Footer>
    )

}

export default Rodape