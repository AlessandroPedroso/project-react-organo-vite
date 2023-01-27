import {Footer,Ul,P} from './styleRodape.js'

const Rodape = () =>{

    return (
        <Footer>

            <section>
                <Ul>
                    <li>
                        <a href='facebook.com' target="_blank">
                            <img src="./assets/fb.png" alt="facebook"/>
                        </a>
                    </li>

                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="./assets/tw.png" alt="twitter"/>
                        </a>
                    </li>

                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="./assets/ig.png" alt="instagram"/>
                        </a>
                    </li>
                </Ul>
            </section>

            <section>
                <img src="./assets/logo.png" alt="logo" />
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